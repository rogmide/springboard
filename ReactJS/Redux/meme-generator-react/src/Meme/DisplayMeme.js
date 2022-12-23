import React from "react";
import "./DisplayMeme.css";

const DisplayMeme = ({ top, buttom, imgURL }) => {
  console.log(imgURL);
  return (
    <>
      <div
        style={{
          width: "300xp",
          height: "300px",
          background: `url(${imgURL}) no-repeat`,
          backgroundSize: "100%",
        }}
        className="backIMG"
      >
        <div className="upText"> {top} </div>
        <div className="downText"> {buttom} </div>
      </div>
    </>
  );
};

export default DisplayMeme;
