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
        <div>
          {" "}
          <h3 className="top"> {top} </h3>{" "}
        </div>
        <div>
          {" "}
          <h3 className="bottom">{buttom} </h3>
        </div>
      </div>
    </>
  );
};

export default DisplayMeme;
