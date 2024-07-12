from flask import Flask, request

import os
import base64
from PIL import Image
from io import BytesIO
import binascii
import re

import google.generativeai as genai
genai.configure(api_key="AIzaSyCwnhoIH4-hTkqKmiQKyvWVH5MP3-1CF4c")
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}
model = genai.GenerativeModel(
  model_name="gemini-1.5-pro",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
)
app = Flask(__name__)

@app.route('/')
def hello():
    files = [
  upload_to_gemini("image_animal6.jpeg", mime_type="image/jpeg"),
]
    chat_session = model.start_chat(
    history=[
        {
        "role": "user",
        "parts": [
            files[0],
        ],
        },
        {
        "role": "model",
        "parts": [
            "This is a beautiful image of a sea turtle swimming in the ocean. The turtle is in focus, and the background is blurred, which creates a sense of depth and movement. The image is well-composed and the colors are vibrant. The sea turtle is a symbol of peace and tranquility, and this image captures that feeling perfectly.",
        ],
        },
    ]
    )

    response = chat_session.send_message("INSERT_INPUT_HERE")

    print(response.text)
    return 'Hello, World!'


def upload_to_gemini(path, mime_type=None):
  """Uploads the given file to Gemini.

  See https://ai.google.dev/gemini-api/docs/prompting_with_media
  """
  file = genai.upload_file(path, mime_type=mime_type)
  print(f"Uploaded file '{file.display_name}' as: {file.uri}")
  return file


@app.route('/generate', methods=['POST'])
def generate():

        data = request.json
        print(data['base64String'])
        print(data['text'])
        # chat_session = model.start_chat()
        # response = chat_session.send_message(data['file'])
        # print(response.text)
        # return response.text
        try:
            base64_string = re.sub('^data:image/.+;base64,', '', data['base64String'])
            imgdata = base64.b64decode(base64_string + '=' * (-len(base64_string) % 4))
            # imgdata = base64.b64decode(data['base64String'] + '=' * (-len(data['base64String']) % 4))
            filename = 'some_image.png'
            with open(filename, 'wb') as f:
                f.write(imgdata)
            print("Image saved")

        except binascii.Error as e:
            print(f"Invalid base64-encoded string: {str(e)}")
        print("Image saved")


        chat_session = model.start_chat(
        history=[
            {
            "role": "user",
            "parts": [
                upload_to_gemini(filename, mime_type="image/png")
            ],
            },
        ]
        )

        response = chat_session.send_message("""
I want you to act as an expert tailwind developer. A user will provide you with a low-fidelity wireframe of an application and you will return a single html component that uses tailwind to create the website. I want the code to look the exact same as the image, ensuring all design elements are accurately reflected in the html code.
Use any tailwind class that you need so that the code output matches the image including the positioning of all the components in the image. Make it beautiful and make it look good.
Use creative license to make the application more fleshed out, if you need to insert an image, use placehold.co to create a placeholder image. If possible animate it and make it beautiful and make it look good.
Just give me the code and nothing else. Do not give me ```javascript or ```jsx in the response. Just give me the html code.                                         
                                             eg. 

                                                        <div class="text-black">
                                                            <h1>Hello World</h1>
                                                        </div>

                                             
                                             DO NOT GIVE ME THE JAVASCRIPT or JSX TAGS
                                                 """)
        print(response.text)
        return response.text

if __name__ == '__main__':
    app.run()


