import React from "react";
import "./DisplayMeme.css";
import { useDispatch } from "react-redux";

const DisplayMeme = ({ id, top, buttom, imgURL }) => {
  const dispatch = useDispatch();

  const memDele = (id) => {
    dispatch({ type: "DELETE_MEME", payload: id });
  };

  return (
    <>
      <div
        onClick={() => memDele(id)}
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
