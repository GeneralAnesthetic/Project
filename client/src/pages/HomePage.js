import React, { Component } from "react";
import Slideshow from "../components/slideShow";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Items from "../components/Items/items.js";
import SandboxMaster from "../components/Sandbox/Sandbox";
// import PortfolioLogin from "../components/Auth/oAuth.js";
// import Editor from "../components/Editor/Editor";
// import Display from "../components/Display/JustAnything";

class HomePage extends Component {
  render() {
    return (
      <div className="project3">
        <div className="screenshots">
          {/* <Wrapper /> */}
          {/* <PorfolioLogin loginId={this.props.params.query.loginId} */}
          <Header />
          {/* <Wrapper> */}
          <Slideshow />
          {/* </Wrapper> */}
        </div>
      </div>
    );
  }
}

export default HomePage;
