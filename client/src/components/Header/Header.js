import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header" onClick={props.slideShow}>
      <h3>
        It's the Portfolio
        <span className="helperApp"> Helper-App </span>
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

export default Header;

// <div>
// <nav className = "sidebar">
//         <ul>
//           <a href="https://hydejack.com/"> Example Portfolio 1 </a>
//           <a href="https://ryanfitzgerald.github.io/devportfolio/">
//             Example Portfolio 2
//           </a>
//           <a href="https://arkadianriver.github.io/arkadianriver.com">
//             Example Portfolio 3
//           </a>
//         </ul>
//       </nav>
//     </div>
//   );
// }
