import React from "react";
const Clicker = () => {
  // Learning Event Liseting
  const fireLasers = (e) => {
    console.log(e)
    console.log("Laser FIRE!!!!!");
    console.log("ZAP, PEW PEW PEW");
  };
  return (
    <>
      <button onMouseOver={fireLasers}>Click Me!!!</button>
      <textarea onScroll={fireLasers} rows="5">
        alsdkhalkshdlasd asdasda sd alsdkhalkshdlasd asdasda sd alsdkhalkshdlasd
        asdasda sd alsdkhalkshdlasd asdasda sd alsdkhalkshdlasd asdasda sd
        alsdkhalkshdlasd asdasda sd alsdkhalkshdlasd asdasda sd alsdkhalkshdlasd
        asdasda sd alsdkhalkshdlasd asdasda sd alsdkhalkshdlasd asdasda sd
        alsdkhalkshdlasd asdasda sd alsdkhalkshdlasd asdasda sd alsdkhalkshdlasd
        asdasda sd alsdkhalkshdlasd asdasda sd
      </textarea>
    </>
  );
};

export default Clicker;
