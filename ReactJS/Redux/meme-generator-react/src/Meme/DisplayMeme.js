import React from "react";

const DisplayMeme = ({ up, down, imgURL }) => {
  return (
    <>
      <div style={{ backgroundImage: imgURL }} className="backIMG">
        <div className="upText"> {up} </div>
        <div className="downText"> {down} </div>
      </div>
    </>
  );
};

export default DisplayMeme;
