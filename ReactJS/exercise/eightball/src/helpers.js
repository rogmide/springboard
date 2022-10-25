import ColorDB from "./ColorDB";

const randomColor = () => {
  return ColorDB[Math.floor(Math.random() * ColorDB.length)];
};

export default randomColor;
