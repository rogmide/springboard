import { DECREMENT, INCREMENT } from "../Actions/actionsType";

const INITIAL_STATE = 0;

export default function count(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT: 
      return state - 1;
    default:
      return state;
  }
}
