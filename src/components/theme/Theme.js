import React from "react";
import "./theme.css";

export default function theme() {
  return (
    <div className="wrapper_theme">
      <div className="container_wrapper">
        <div className="col_20" data-aos="fade-up">
          <div className="title_theme">Create without limits</div>
          <div className="content_col_20">
            <p>
              With Unreal Engine, you can bring amazing real-time experiences to
              life using the world’s most advanced real-time 3D creation tool.
            </p>
            <p>
              From first projects to the most demanding challenges, our free and
              accessible resources and inspirational community empower everyone
              to realize their ambitions.
            </p>
          </div>
        </div>
        <div className="row_2">
          <div className="items_row" data-aos="fade-up">
            <div className="title_items">Learn Unreal Engine</div>
            <div className="content_items">
              With hundreds of hours of free online learning content, an
              extensive library of webinars, and options for instructor-led
              training, we have a way to learn that's right for you.
            </div>
            <div className="btn_items">
              <a href="lorem.com">START LEARNING</a>
            </div>
          </div>
          <div className="items_row" data-aos="fade-up">
            <div className="title_items">Join the community</div>
            <div className="content_items">
              Unreal creators are the true power behind Unreal Engine. Be part
              of a community that builds cutting-edge experiences, and supports
              each other along the way.
            </div>
            <div className="btn_items">
              <a href="lorem.com">VISIT COMMUNITY</a>
            </div>
          </div>
          <div className="items_row" data-aos="fade-up">
            <div className="title_items">Get support</div>
            <div className="content_items">
              Explore comprehensive reference documentation, instructional
              guides, community-based support, and options for dedicated
              professional support.
            </div>
            <div className="btn_items">
              <a href="lorem.com">SEE SUPPORT OPTIONS</a>
            </div>
          </div>
        </div>
        <div className="col_4" data-aos="fade-up">
          <div className="col_4_header">
            <div className="left_col_4">The latest from Unreal Engine</div>
            <div className="right_col_4">SEE ALL NEWS & EVENTS</div>
          </div>
          <div className="row_3">
            <div className="items_col" data-aos="fade-up">
              <img
                src="https://cdn2.unrealengine.com/m2m-02-1920x1080-313b6089e0e7.jpg?resize=1&w=533"
                alt=""
              ></img>
              <div className="title_items_col">
                NEWS<p>New release brings Mesh to MetaHuman and more</p>
              </div>
              <div className="content_items">
                This release of the MetaHuman framework brings not only new
                features for MetaHuman Creator, but also an exciting new
                MetaHuman Plugin for Unreal Engine, as well as support for the
                new character rigging, animation, and physics features in Unreal
                Engine 5.
              </div>
              <div className="btn_items_col">
                <a href="lorem.com">FIND OUT MORE</a>
              </div>
            </div>
            <div className="items_col" data-aos="fade-up">
              <img
                src="https://cdn2.unrealengine.com/ue5-block-1961x1103-8db63d5857d7.jpg?resize=1&w=533"
                alt=""
              ></img>
              <div className="title_items_col">
                NEWS<p>Unreal Engine 5 is now available!</p>
              </div>
              <div className="content_items">
                With this release, we aim to empower both large and small teams
                to really push the boundaries of what’s possible, visually and
                interactively. UE5 will enable game developers and creators
                across industries to realize next-generation real-time 3D
                content and experiences with greater freedom, fidelity, and
                flexibility than ever before.
              </div>
              <div className="btn_items_col">
                <a href="lorem.com">FIND OUT MORE</a>
              </div>
            </div>
            <div className="items_col" data-aos="fade-up">
              <img
                src="https://cdn2.unrealengine.com/feed-1920x1080-teaser-1920x1080-2cb99ff82b7b.jpg?resize=1&w=533"
                alt=""
              ></img>
              <div className="title_items_col">
                NEWS<p>The Matrix Awakens: An Unreal Engine 5 Experience </p>
              </div>
              <div className="content_items">
                Ready to explore where interactive storytelling and
                entertainment goes next? Download the new UE5 tech demo today
                and take a wild ride into the reality-bending universe of The
                Matrix!
              </div>
              <div className="btn_items_col">
                <a href="lorem.com">DOWNLOAD NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
