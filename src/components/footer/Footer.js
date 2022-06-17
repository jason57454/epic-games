import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="wrapper_footer">
      <div className="container_footer">
        <div className="row_11">
          <div className="col_10">
            <div className="title_col_10">GAME DEVELOPERS</div>
            <div className="links">
              <p>Epic Online Services</p>
              <p>Epic Games Store</p>
              <p>Releasing your game</p>
              <p>Guides & white papers</p>
              <p>Unreal Indies</p>
            </div>
          </div>
          <div className="col_10">
            <div className="title_col_10">SUPPORT</div>
            <div className="links">
              <p>Get help</p>
              <p>Documentation</p>
              <p>Forums</p>
              <p>Roadmap</p>
              <p>Unreal Developer Network</p>
            </div>
          </div>
          <div className="col_10">
            <div className="title_col_10">PARTNERSHIPS </div>
            <div className="links">
              <p>Nvidia Edge</p>
              <p>Intel + Unreal</p>
              <p>Academic partners</p>
              <p>Training partners</p>
            </div>
          </div>
          <div className="col_10">
            <div className="title_col_10">COMPANY </div>
            <div className="links">
              <p>Awards</p>
              <p>Branding guidelines</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="copyrights">
          © 2004-2022, Epic Games, Inc. All rights reserved. Unreal and its logo
          are Epic’s trademarks or registered trademarks in the US and
          elsewhere.
        </div>
        <div className="links_1">
          <div className="row_12">
            <p>Terms of service</p>
            <p>Privacy policy</p>
          </div>
          <div className="row_12">
            <img
              src="https://cdn2.unrealengine.com/eg-shield-logo-white-f8185c103d8d.svg"
              alt=""
            ></img>
            <img
              src="https://cdn2.unrealengine.com/ue-logo-white-e34b6ba9383f.svg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
