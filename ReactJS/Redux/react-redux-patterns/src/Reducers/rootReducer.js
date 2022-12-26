import { CHANGE_NUM } from "../Actions/actionsType";
import { INCREMENT, DECREMENT } from "../Actions/actionsType";

const INITIAL_STATE = { num1: 0, num2: 0, count: 0 };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_NUM:
      return { ...state, [action.num]: action.value };
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

export default rootReducer;
