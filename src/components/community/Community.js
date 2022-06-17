import React from "react";
import "./community.css";

export default function community() {
  return (
    <div className="wrapper_community">
      <div className="bg_img">
        <div className="bg"></div>
      </div>
      <div className="col_5">
        <div className="gradient_bg"></div>
        <div className="title_col_5">A thriving community of creators</div>
        <div className="content_col_5">
          Creators and developers around the world hone their real-time skills
          in remarkable, groundbreaking ways. Check out some of our favorite
          recent projects from real Unreal Engine users across industries.
        </div>
        <div className="btn_community">
          <a href="lorem.com" alt="">
            JOIN THE COMMUNITY
          </a>
        </div>
      </div>
      <div className="row_7">
        <div className="cards">
          <div className="img_card">
            <img
              src="https://cdn2.unrealengine.com/body-1-news-uolsuccessstories-1920x1080-097165076.jpg?resize=1&w=800"
              alt=""
            ></img>
          </div>
          <div className="row_8">
            <div className="card_title">
              Forgotten <p>By Aspn</p>
            </div>
            <div className="author">
              <img
                src="https://cdn2.unrealengine.com/aspn-taylor180x180-180x180-105763998.jpg?resize=1&w=120"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="img_card">
            <img
              src="https://cdn2.unrealengine.com/screenshot00027-1920x1050-801fd3a3dc48.png?resize=1&w=800"
              alt=""
            ></img>
          </div>
          <div className="row_8">
            <div className="card_title">
              Omno <p>By Jonas Manke</p>
            </div>
            <div className="author">
              <img
                src="https://cdn2.unrealengine.com/mugshot-1008x915-f13e6aaf7690.PNG?resize=1&w=120"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="img_card">
            <img
              src="https://cdn2.unrealengine.com/3-scene-showing-the-creation-of-the-last-universal-common-ancestor-luca-1920x1080-afc46b22dd27.png?resize=1&w=800"
              alt=""
            ></img>
          </div>
          <div className="row_8">
            <div className="card_title">
              ONENESS <p>By Hyunwoo Lee</p>
            </div>
            <div className="author">
              <img
                src="https://cdn2.unrealengine.com/leehyunwoo-720x960-7eb07fcedf09.png?resize=1&w=120"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
