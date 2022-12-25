import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faHome,
  faTrashCan,
  faEdit,
  //   faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";
import { useDispatch } from "react-redux";

const Todo = ({ id, text }) => {
  const dispatch = useDispatch();
  const [scrachChange, setScrachChange] = useState(true);
  const [style, setStyle] = useState("none");

  const setLineThrough = () => {
    if (scrachChange) {
      setStyle("line-through");
      setScrachChange(false);
    } else {
      setStyle("none");
      setScrachChange(true);
    }
  };

  const removeTodo = (id) => {
    dispatch({ type: "DEL_TODO", payload: id });
  };

  return (
    <div className="Todo" key={id}>
      <p style={{ textDecoration: `${style}` }}>
        <span onClick={() => setLineThrough()}> {text}</span> -{" "}
        <span data-testid="todo_trash" onClick={() => removeTodo(id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>{" "}
      </p>
    </div>
  );
};

export default Todo;
