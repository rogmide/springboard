import React from "react";
import { useSelector } from "react-redux";
import MemeForm from "./MemeForm";
import DisplayMeme from "./DisplayMeme";
import "./MemeList.css";

const MemeList = () => {
  const memes = useSelector((store) => store);

  return (
    <>
      <div className="appContainer">
        <MemeForm />
        <div className="MemeHolder">
          {memes.map((m) => (
            <DisplayMeme
              key={m.id}
              id={m.id}
              top={m.top}
              buttom={m.buttom}
              imgURL={m.imgURL}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MemeList;
