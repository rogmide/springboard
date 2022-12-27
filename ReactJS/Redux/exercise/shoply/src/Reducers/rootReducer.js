import fakeDB from "../data.json";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Action/actionsType";

const INITIAL_STATE = {
  products: fakeDB.products,
  cartItems: {},
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.id);
      return { ...state };
    case REMOVE_FROM_CART:
      console.log(action.id);
      return { ...state };

    default:
      return state;
  }
}

export default rootReducer;
