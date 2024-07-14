import React, { useState } from "react";

import parse from "html-react-parser";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import Editor from "@monaco-editor/react";

const Result: React.FC = () => {
  const [code, setCode] = useState("");

  return (
    <div className='h-screen w-dvw flex overflow-hidden '>
      <div className='w-full p-4 '>
        <h2>Rendered HTML:</h2>
        <div className='p-2 relative h-full overflow-y-auto'>{parse(code)}</div>
        <div className='p-2 relative h-full overflow-y-auto'></div>
      </div>
      <div className='w-1/2 p-4'>
        {/* <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className='h-full w-full bg-gray-800 text-white p-2'
          wrap='off'
          placeholder='Paste your HTML code here...'
          cols={30}
        /> */}
        <Editor
          height='100vh'
          defaultLanguage='html'
          defaultValue='// some comment'
          value={code}
          onChange={(value) => setCode(value || "")}
        />
      </div>
    </div>
  );
};

export default Result;
