import fakeDB from "../data.json";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Action/actionsType";

const INITIAL_STATE = {
  products: fakeDB.products,
  cartItems: {},
  amtItem: 0,
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // console.log(action.type)
    case ADD_TO_CART:
      const tempCart = { ...state.cartItems };
      tempCart[action.id] = (tempCart[action.id] || 0) + 1;
      return { ...state, cartItems: tempCart };

    case REMOVE_FROM_CART:
      const tempCart2 = { ...state.cartItems };
      tempCart2[action.id] = (tempCart2[action.id] || 0) - 1;
      if (tempCart2[action.id] === 0) delete tempCart2[action.id];
      return { ...state, cartItems: tempCart2 };

    default:
      return state;
  }
}

export default rootReducer;
