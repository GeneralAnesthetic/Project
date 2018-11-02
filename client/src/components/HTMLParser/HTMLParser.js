import React from "react";
import Parser from "html-react-parser";
import { render } from "react-dom";

const HTMLParser = ({ code }) => {
  return <div className="display-style">{Parser(code)}</div>;
};

export default HTMLParser;
