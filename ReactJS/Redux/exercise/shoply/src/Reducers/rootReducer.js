import fakeDB from "../data.json";

function rootReducer(state = fakeDB.products, action) {
  switch (action.type) {
    case "SOME_ACTION":
      return state + "";

    default:
      return state;
  }
}

export default rootReducer;
