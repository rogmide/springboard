import React from "react";
import { useSelector } from "react-redux";
import MemeForm from "./MemeForm";
import DisplayMeme from "./DisplayMeme";

const MemeList = () => {
  const memes = useSelector((store) => store.memes);
  //   console.log(memes);
  return (
    <>
      <div>
        <MemeForm />
        <div className="MemeHolder">
          {memes.map((m) => (
            <DisplayMeme
              key={m.id}
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
