import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
  return (
    <div className="wrap" onClick={props.hideWrapper}>
      <h3>
        It's the Portfolio
        <span className="helperWrap"> Helper-App </span>
      </h3>
      <nav>
        <ul className="list-unstyled" id="Links">
          <li>
            <a href="https://ryanfitzgerald.github.io/devportfolio/">
              Example Portfolio 1
            </a>
          </li>
          <br />
          <li>
            <a href="https://arkadianriver.github.io/arkadianriver.com">
              Example Portfolio 2
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Wrapper;
