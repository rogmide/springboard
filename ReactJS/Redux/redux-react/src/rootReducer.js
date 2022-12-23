const INITIAL_STATE = { count: 0 };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "MULTIPLY":
      return { ...state, count: state.count * action.payload };
    default:
      return state;
  }
};

export default rootReducer;
