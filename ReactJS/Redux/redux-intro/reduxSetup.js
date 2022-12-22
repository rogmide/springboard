const INITIAL_STATE = { count: 0, price: 99 };

const countReducer = (state = INITIAL_STATE, action) => {
  //   if (action.type === "LOG_STATE") {
  //     console.log("Here is your state: ", state);
  //     return state;
  //   }

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }

  //   // If actions dont match
  //   return state;
};

// store.dispatch({ type: "LOG_STATE" })

const store = Redux.createStore(countReducer);
