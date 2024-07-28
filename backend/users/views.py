from django.shortcuts import render

import os

import google.generativeai as genai
# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User, AIGenerations
from .serializers import UserSerializer, AIModelSerializer
import datetime
import jwt
import json
import re
import base64
import binascii




genai.configure(api_key="AIzaSyCwnhoIH4-hTkqKmiQKyvWVH5MP3-1CF4c")

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",

)


class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
    def put(self, request, pk):
        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        user = User.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        print(email, password)
        user = User.objects.get(email=email)
        print(user)


        if user is None:
            return Response({"message": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)
        if not user.check_password(password):
            return Response({"message": "Incorrect password"}, status=status.HTTP_400_BAD_REQUEST)
        
        payload = {
            'id': user.id,
            'exp': datetime.datetime.now() + datetime.timedelta(days=7, minutes=0),
            'iat': datetime.datetime.now()
        }

        token = jwt.encode(payload, "SECRET_KEY", algorithm="HS256")

        response = Response()
        response.set_cookie(key="jwt", value=token)
        response.data = {
            'jwt': token
        }
        return response


class UserView(APIView):
    def get(self, request):
        token = request.headers.get('Authorization').split(' ')[1]
        print(token)
        if not token:
            return Response({"error": "Not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
    
        try:
            payload = jwt.decode(token, "SECRET_KEY", algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            return Response({"error": "Token expired"}, status=status.HTTP_401_UNAUTHORIZED)


        user = User.objects.get(id=payload['id'])
        serializer = UserSerializer(user)
        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }

        return response
    

    
class Draw(APIView):
    def __init__(self):
        generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
    }

    model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",

    )

    chat_session = model.start_chat(
    history=[]
)
    

    def uploadFile(self, data, mime_type):
        file = genai.upload_file("some_image.png", mime_type=mime_type)
        print(f"Uploaded file '{file.display_name}' as: {file.uri}")
        return file
    
    def post(self,request):
        data = json.loads(request.body.decode('utf-8'))
        print(data)

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
        chat_session = model.start_chat(
        history=[
            {
            "role": "user",
            "parts": [
                self.uploadFile(filename, mime_type="image/png")
            ],
            },
        ]
        )
        prompt = """
I want you to act as an expert tailwind developer. A user will provide you with a low-fidelity wireframe of an application and you will return a single html component that uses tailwind to create the website. I want the code to look the exact same as the image, ensuring all design elements are accurately reflected in the html code.
Use any tailwind class that you need so that the code output matches the image including the positioning of all the components in the image. Make it beautiful and make it look good and responsive.
Use creative license to make the application more fleshed out, if you need to insert an image, use placehold.co to create a placeholder image. If possible animate it and make it beautiful and make it look good.
Just give me the code and nothing else. Do not give me ```javascript or ```jsx in the response. Just give me the html code. And instead of 'w-screen' use 'w-full' for the setting the width of the outermost container                                      
                                             eg. 
                                                    <div class="sm:w-full md:w-1/2">
                                                        <div class="text-black">
                                                            <h1>Hello World</h1>
                                                        </div>
                                                    </div>
                                             
                                             DO NOT GIVE ME THE JAVASCRIPT or JSX TAGS
    """
        response = model.generate_content([
               prompt,
                                             self.uploadFile(data['base64String'], mime_type="image/png"),
                                         
    ])
        # print(response.text)
        print(data['user']['user']['user'])
        aiGeneration = AIGenerations( output=response.text, input=data['base64String'], user_id=data['user']['user']['user']['id'])
        aiGeneration.save()

        return Response(response.text)
