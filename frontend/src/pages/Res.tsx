import React from "react";
import parse from "html-react-parser";

const html = `
  <h1 class="underline">React</h1>
  <h2>A JavaScript library for building user interfaces</h2>
  <p>
    <a href="#">Get Not Started</a>
  </p>
`;

const Res = () => {
  return <div>{parse(html)}</div>;
};

export default Res;
