import React from "react";
import "../../src/App.css";
import ImgBody from "./ImgBody";
import TopBar from "./TopBar";

function MainBody() {
  return (
    <React.Fragment>
      <div>
        <TopBar />
        <ImgBody />
      </div>
    </React.Fragment>
  );
}

export default MainBody;
