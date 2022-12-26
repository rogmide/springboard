const INITIAL_STATE = { num1: 0, num2: 0 };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_NUM":
      return { ...state, [action.num]: action.value };

    default:
      return state;
  }
}

export default rootReducer;
