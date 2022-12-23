import React from "react";
import { useSelector } from "react-redux";
import MemeForm from "./MemeForm";

const MemeList = () => {
  const memes = useSelector((store) => store.memes);

  return (
    <>
      <div>
        <MemeForm />
      </div>
    </>
  );
};

export default MemeList;
