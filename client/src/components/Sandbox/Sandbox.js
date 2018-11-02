import React from "react";
import { Sandbox, withDependencies } from "react-sandbox-editor";
import axios from "axios";
import Slideshow from "../slideShow";

// I think, instead of 'props.code', you'll need axios to getAll from api/snippets to view all items selected in the order they were selected and so then you'd need to add a getAll button in the slideshow, plus a clear button
// Also, below see if you can have a sandbox that gets html and css, can snippets be divided, as an object, with code and css?
// Or can the sanbox just have html and css and no JSX?
// props ? props.findAll || props.code : ?

function SandboxMaster(props) {
  const ReactSandbox = withDependencies([
    "https://fb.me/react-15.1.0.js",
    "https://fb.me/react-dom-15.1.0.js"
  ])(Sandbox);
  console.log(props.code, "props being passed down");
  return (
    <ReactSandbox
      classes={{
        header: undefined
      }}
      executeOnCodeChange
      executeOnCodeChangeDebounce={1000}
      permissions={[
        "allow-forms",
        "allow-pointer-lock",
        "allow-popups",
        "allow-modals",
        "allow-same-origin",
        "allow-scripts",
        "allow-top-navigation"
      ]}
      scriptEditor={{
        defaultValue:
          "ReactDOM.render(\n  " + "<div>" + [props.changeLings] ||
          props.findAll ||
          props.removeSnippet +
            "</div>" +
            " ,\n  document.getElementById('root')\n);",
        mode: "jsx",
        readOnly: false,
        wrapLines: false
      }}
      templateEditor={{
        defaultValue: '<div id="root"></div>',
        mode: "html",
        readOnly: false,
        wrapLines: false
      }}
      theme="solarized_dark"
    />
  );
}
export default SandboxMaster;
