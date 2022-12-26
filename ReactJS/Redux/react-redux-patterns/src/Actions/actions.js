import { CHANGE_NUM, DECREMENT, INCREMENT } from "./actionsType";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const change = (num, val) => ({ type: CHANGE_NUM, num, value: val });
