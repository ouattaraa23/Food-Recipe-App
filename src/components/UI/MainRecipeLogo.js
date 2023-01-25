import React from "react";
import "./MainRecipeLogo.css";
import lasagna from "./lasagna.png";

function MainRecipeLogo() {
  return (
    <div className="images">
      <img src={lasagna} alt="Logo" height={100} width={100} />
      <img src={lasagna} alt="Logo" height={100} width={100} />
    </div>
  );
}

export default MainRecipeLogo;
