import React from "react";
import "./features.css";

export default function Features() {
  return (
    <div className="wrapper_features">
      <div className="container_row_21">
        <div className="row_21">
          <div className="col_15" data-aos="fade-up">
            <div className="title_col_15">
              Free download —includes every feature!
            </div>
            <div className="content_col_15">
              Unreal Engine comes fully loaded and production-ready out of the
              box, with every feature and full source code access included.
            </div>
          </div>
          <div className="row_22">
            <div className="col_16" data-aos="fade-up">
              <div className="title_col_16">GET UNREAL ENGINE</div>
              <div className="content_col_16">
                Get started for free!
                <p>
                  Unreal Engine is free to use for creating linear content,
                  custom projects, and internal projects. It's also free to get
                  started for game development—a 5% royalty only kicks in when
                  your title earns over $1 million USD.
                </p>
              </div>
            </div>
            <div className="col_16" data-aos="fade-up">
              <div className="title_col_16">TALK TO US</div>
              <div className="content_col_16">
                Other license options
                <p>
                  Looking for premium support, private training, custom terms,
                  or a direct relationship with Epic Games? Talk to us about an
                  Unreal Enterprise Program license or custom solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="container_news">
          <div className="title_news">
            NEWSLETTER
            <p>
              Get updates on industry innovations and the latest free assets for
              <span> your industry</span>
            </p>
          </div>
          <div className="container_input">
            <input placeholder="Email Address"></input>
            <div className="subscribe_btn">
              <a href="lorem.com">SUBSCRIBE</a>
            </div>
          </div>
          <div className="disclaimer">
            By submitting your information, you are agreeing to receive news,
            surveys, and special offers from Epic Games.
          </div>
        </div>
        <div className="background_news"></div>
      </div>
    </div>
  );
}
