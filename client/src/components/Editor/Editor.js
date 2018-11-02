import React from "react";
import { render } from "react-dom";
import brace from "brace";
import { split as SpitEditor } from "react-ace";

import "brace/mode/java";
import "brace/theme/github";
import "./Editor.css";
// Render editor
class Editor extends React.Component {
  onChange(newValue) {
    //event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Editor</h2>
        <SpitEditor
          mode="java"
          theme="github"
          className="ace-editor"
          onChange={this.onChange}
          splits={2}
          orientation="beside"
          name="UNIQUE_ID_OF_DIV"
          width="500px"
          height="300px"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}

export default Editor;
