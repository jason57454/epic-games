import "./App.css";
import React from "react";
import LeftNav from "./components/leftNav/LeftNav";
import RightNav from "./components/rightNav/RightNav";
import HomePage from "./components/homepage/HomePage";
import Theme from "./components/theme/Theme";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="row">
          <div className="container_left">
            <LeftNav></LeftNav>
          </div>

          <div className="container_right">
            <RightNav></RightNav>
          </div>
        </div>
      </nav>

      <div className="container_homepage">
        <HomePage></HomePage>
      </div>
      <div className="container_theme">
        <Theme></Theme>
      </div>
      <div className="container_community">
        <Community></Community>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
