import React from "react";
import "./DisplayMeme.css";

const DisplayMeme = ({ top, buttom, imgURL }) => {
  return (
    <>
      <div
        style={{
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
