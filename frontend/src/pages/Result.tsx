import React, { useState } from "react";

import parse from "html-react-parser";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import Editor from "@monaco-editor/react";

const Result: React.FC = () => {
  const [code, setCode] = useState("");

  const [buttonPressed, setButtonPressed] = useState(0);

  return (
    <div className='h-screen w-screen flex overflow-hidden flex-col '>
      <div className='p-10 pb-0 flex flex-row m-2 '>
        <h1 className='text-3xl text-center w-full font-extrabold bg-slate-400 flex justify-center items-center rounded-lg'>
          Results:
        </h1>
        <div className='flex items-center justify-end p-2 gap-6 rounded-lg'>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded font-mono fill-stone-600 h-10 text-xs'
            onClick={() => setButtonPressed(0)}
          >
            Button 0
          </button>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded font-mono fill-stone-600 h-10 text-xs'
            onClick={() => setButtonPressed(1)}
          >
            Button 1
          </button>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded font-mono fill-stone-600 h-10 text-xs'
            onClick={() => setButtonPressed(2)}
          >
            Button 2
          </button>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded font-mono fill-stone-600 h-10 text-xs'
            onClick={() => setButtonPressed(3)}
          >
            Button 3
          </button>
        </div>
      </div>
      <div className='flex h-screen w-screen  overflow-x-hidden p-10 pt-0'>
        <div
          className={`${
            buttonPressed === 0
              ? "w-1/2"
              : buttonPressed === 2
              ? "hidden"
              : "w-1/4"
          }
          bg-slate-900`}
        >
          <div className='p-2 relative h-full overflow-y-auto'>
            {parse(code)}
          </div>
        </div>
        <div
          className={`${
            buttonPressed === 0
              ? "w-1/2"
              : buttonPressed === 2
              ? "hidden"
              : buttonPressed === 1
              ? "w-3/4"
              : "w-1/4"
          }
          
          `}
        >
          <Editor
            height='100%'
            defaultLanguage='html'
            defaultValue='// some comment'
            value={code}
            onChange={(value) => setCode(value || "")}
            theme='vs-dark'
            language='html'
            loading='Loading...'
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              formatOnPaste: true,
              formatOnType: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
