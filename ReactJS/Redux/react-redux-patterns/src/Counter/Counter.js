import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT } from "../Actions/actionsType";

function Counter() {
  const count = useSelector((st) => st.count);
  const dispatch = useDispatch();

  function up(evt) {
    dispatch({ type: INCREMENT });
  }
  function down(evt) {
    dispatch({ type: DECREMENT });
  }

  return (
    <div>
      <h2>Count is: {count}</h2>
      <button onClick={up}> + </button>
      <button onClick={down}> - </button>
    </div>
  );
}

export default Counter;
