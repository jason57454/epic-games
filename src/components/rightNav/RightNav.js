import React from "react";
import "./rightNav.css";

export default function RightNav() {
  return (
    <div className="right_nav">
      <ul>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li>
          <i className="fa-solid fa-globe"></i>
        </li>
      </ul>
      <div className="sign_btn">
        <i className="fa-solid fa-person"></i>
        <p>sign in</p>
      </div>
      <div className="dl_btn">download</div>
    </div>
  );
}
