import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Tldraw, exportToBlob, useEditor } from "tldraw";
import "tldraw/tldraw.css";
import { blobToBase64 } from "file64";
import axios from "axios";
import Modal from "./components/Modal";
import { useNavigate } from "react-router-dom";

function App() {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const history = useNavigate();

  const [componentText, setComponentText] = useState("");
  async function sendDatatoGemini(base64String: string) {
    // TODO Make these files available on the local file system
    // You may need to update the file paths
    const data = axios.post(
      "http://127.0.0.1:5000/generate_text",
      {
        base64String,
        text,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data.then((res) => console.log(res)));

    setComponentText((await data).data);
    history("/result", { state: { data: (await data).data } });
  }

  function ExportCanvasButton() {
    const editor = useEditor();
    return (
      <div className='fixed bottom-0 left-0 w-full bg-background px-4 py-3 shadow-lg flex flex-row gap-5 z-50'>
        <textarea
          placeholder='(Optional) Descibe the UI you want to create...'
          className='w-full rounded-2xl border border-muted px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none'
          value={text}
          onChange={handleInputChange}
        />
        <button
          style={{
            pointerEvents: "all",
            fontSize: 18,
            backgroundColor: "black",
          }}
          onClick={async () => {
            const shapeIds = editor.getCurrentPageShapeIds();
            if (shapeIds.size === 0) return alert("No shapes on the canvas");
            const blob = await exportToBlob({
              editor,
              ids: [...shapeIds],
              format: "png",
              opts: { background: false },
            });
            const base64 = await blobToBase64(blob);
            console.log("asdsad", base64);
            sendDatatoGemini(base64);
          }}
        >
          Create UI
        </button>
      </div>
    );
  }

  return (
    <div>
      {componentText.length > 0 && (
        <div className='z-50 absolute top-0 left-0 w-full bg-background px-4 py-3 shadow-lg flex flex-row gap-5 bg-black bg-opacity-50 '>
          <Modal
            isOpen={componentText.length > 0}
            onClose={() => {
              setComponentText("");
            }}
            text={componentText}
          />
        </div>
      )}

      <div
        style={{
          position: "fixed",
          inset: 0,
          height: "90vh",
          width: "100%",
          zIndex: 0,
        }}
      >
        <Tldraw assetUrls={{}} persistenceKey='tldraw'>
          <ExportCanvasButton />
        </Tldraw>
      </div>
    </div>
  );
}

export default App;
