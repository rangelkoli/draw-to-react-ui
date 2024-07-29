import React, { useEffect, useState } from "react";

import parse from "html-react-parser";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import Editor from "@monaco-editor/react";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";

const Result: React.FC = () => {
  const [code, setCode] = useState("");

  const codeMain = useSelector((state: RootState) => state.code.code);
  console.log("Code:", codeMain);

  useEffect(() => {
    setCode(codeMain.code);
  }, [codeMain]);

  const [buttonPressed, setButtonPressed] = useState(0);

  return (
    <div className='h-screen w-screen flex overflow-hidden flex-col '>
      <div className='p-10 pb-0 flex flex-row m-2 '>
        <h1 className='text-3xl text-center w-full font-extrabold  flex p-2 rounded-lg'>
          Results:
        </h1>
        <div className='flex items-center justify-end p-2 gap-2 rounded-lg'>
          <button
            className='px-4 py-2 bg-white text-white rounded font-mono fill-stone-600 h-10 text-xs'
            onClick={() => setButtonPressed(0)}
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {" "}
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z'
                  fill='#000000'
                ></path>{" "}
              </g>
            </svg>
          </button>
          <button
            className='px-4 py-2 bg-white text-white rounded font-mono fill-stone-600 h-10 text-xs'
            onClick={() => setButtonPressed(1)}
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {" "}
                <path
                  d='M10 3V4.4C10 4.96005 10 5.24008 10.109 5.45399C10.2049 5.64215 10.3578 5.79513 10.546 5.89101C10.7599 6 11.0399 6 11.6 6H12.4C12.9601 6 13.2401 6 13.454 5.89101C13.6422 5.79513 13.7951 5.64215 13.891 5.45399C14 5.24008 14 4.96005 14 4.4V3M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z'
                  stroke='#000000'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>{" "}
              </g>
            </svg>
          </button>
          <button
            className={`px-4 py-2  text-white rounded font-mono fill-stone-600 h-10 text-xs ${
              buttonPressed === 1 ? "bg-white" : "bg-slate-900"
            }`}
            onClick={() => setButtonPressed(2)}
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {" "}
                <path
                  d='M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H12H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H12H8C6.11438 21 5.17157 21 4.58579 20.4142C4 19.8284 4 18.8856 4 17V12V7Z'
                  stroke='#323232'
                  stroke-width='2'
                  stroke-linejoin='round'
                ></path>{" "}
                <path
                  d='M11.5 18H12.5'
                  stroke='#323232'
                  stroke-width='2'
                  stroke-linecap='round'
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className='flex h-screen w-screen  overflow-x-hidden p-10 pt-0'>
        <div
          className={`${
            buttonPressed === 0
              ? "w-full"
              : buttonPressed === 2
              ? "w-4/6"
              : "w-1/4"
          }
          bg-slate-900`}
        >
          <div className='p-2 relative h-full overflow-y-auto'>
            <div className='text-white text-lg font-mono'>{parse(code)}</div>
          </div>
        </div>
        <div
          className={`${
            buttonPressed === 0
              ? "hidden"
              : buttonPressed === 2
              ? "w-2/6"
              : buttonPressed === 1
              ? "w-3/4"
              : "w-1/4"
          }
          
          `}
        >
          <Editor
            height='100%'
            width={
              buttonPressed === 1
                ? "100%"
                : buttonPressed === 3
                ? "100%"
                : "100%"
            }
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
