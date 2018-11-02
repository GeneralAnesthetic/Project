import React from "react";
import Editor from "../Editor/Editor";
import HTMLParser from "../HTMLParser/HTMLParser";

import "./Display.css";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
  }
  onChange(newValue) {
    this.setState({ code: newValue });
  }
  render() {
    return (
      <div className="display-wrapper">
        <div className="editor-wrapper">
          <Editor value={this.state.code} onChange={this.onChange} />
        </div>
        <div className="htmlParser-wrapper">
          <h2>Results</h2>
          <HTMLParser code={this.state.code} />
        </div>
      </div>
    );
  }
}

export default Display;
