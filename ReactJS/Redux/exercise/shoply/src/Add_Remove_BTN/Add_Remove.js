import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Action/actions";

const Add_RemoveBtn = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <>
      {" "}
      <div>
        <button
          className="btn btn-success"
          onClick={() => dispatch(addToCart(id))}
        >
          Add
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Add_RemoveBtn;
