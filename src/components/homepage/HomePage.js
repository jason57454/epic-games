import React, { useState, useEffect } from "react";
import homepage_video from "./assets/homepage-opener.mp4";
import "./homePage.css";

export default function HomePage() {
  const [gradient, setGradient] = useState({
    transform: "translateX(-90px) rotate(340deg) translateZ(0px)",
    opacity: "1",
  });
  const [scale, setScale] = useState({ transform: "none", opacity: "1" });
  const [translate, setTranslate] = useState({
    transform: "translateY(1px)",
    opacity: "1",
  });

  const getGradient = () => {
    let pourcentage = (window.scrollY - 0) / (300 - 0);
    var onScrollPercent = pourcentage;
    var setTranslate = -110 * onScrollPercent - 90;
    if (setTranslate < -200) setTranslate = -200;
    setGradient({
      transform: `translateX(${setTranslate}px)`,
      opacity: `1`,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", getGradient);
  }, []);

  const getTranslate = () => {
    let pourcentage = (window.scrollY - 0) / (300 - 0);
    var onScrollPercent = pourcentage;
    var setTranslateY = -1000 * onScrollPercent - (-1);
    var setOpacity = -10 * onScrollPercent - (-1);
    if (setOpacity < 0) setOpacity = 0;
    if (setTranslateY < -1500) setTranslateY = -1500;
    setTranslate({
      transform: `translateY(${setTranslateY}px)`,
      opacity: `${setOpacity}`,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", getTranslate);
  }, []);

  const getScale = () => {
    let percentage = (window.scrollY - 0) / (1300 - 0);
    let translatePercentage = (window.scrollY - 500) / (1320 - 500);
    var onScrollPercent = percentage;
    var setScaleX = (50 * onScrollPercent - 33.5) / -22;
    var setTranslateY = (71000 * translatePercentage + 710) / -77;
    if (setScaleX < 0.5) setScaleX = -0.5;
    if (setScaleX > 1) setScaleX = 1;
    if (setTranslateY > 0) setTranslateY = 0;
    setScale({
      transform: `translateY(${setTranslateY}px) scaleX(${setScaleX}) scaleY(${setScaleX}) translateZ(0px)`,
      opacity: "1",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", getScale);
  }, []);

  return (
    <div className="wrapper_homepage">
      <div className="homepage">
        <div className="gradient_left" style={gradient}></div>
        <div className="container_video" style={scale}>
          <video className="video" loop="yes" autoPlay="yes" muted="">
            <source src={homepage_video}></source>
          </video>
        </div>
        <div className="content" style={translate}>
          <h1 className="title_homepage">
            The world's most open and advanced real-time 3D creation tool{" "}
          </h1>
          <div className="margin_bot">
            <div className="btn">
              <a href="logo.com">Learn more about UE5</a>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="container_carousel">
          <div className="video_carousel">
            <video
              className="autoplay-video"
              loop="yes"
              autoPlay="yes"
              muted="yes"
            >
              <source src="https://cdn2.unrealengine.com/architectureindustry-compressed-c04d17d2ec88.mp4"></source>
            </video>
          </div>
          <div className="content_carousel">
            <div className="row_1">
              <div className="title_content">
                Design tomorrow, experience today
              </div>
              <div className="text_content">
                Beginners, visionaries, the full spectrum of architectural
                visualization is available to you. Get beautiful, get bold, the
                way is clear.
              </div>
            </div>
          </div>
        </div>
        <div className="progressBar" id="progress">
          <span></span>
        </div>
      </div>
    </div>
  );
}
