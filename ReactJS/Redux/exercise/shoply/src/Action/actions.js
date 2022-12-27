import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionsType";

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
}
