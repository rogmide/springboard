import ColorDB from "./ColorDB";

const randomColor = () => {
  return ColorDB[Math.floor(Math.random() * ColorDB.length)];
};

const randomNumber = () => {
  return Math.random() * 100 + 1;
};

export { randomColor, randomNumber };
