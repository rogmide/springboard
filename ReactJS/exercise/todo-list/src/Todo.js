import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faHome,
  faTrashCan,
  faEdit,
  //   faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";

const Todo = ({ id, text, done, scrach, removeTodo, showEdit }) => {
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

  return (
    <div className="Todo" key={id}>
      <p style={{ textDecoration: `${style}` }}>
        <span onClick={() => setLineThrough()}> {text}</span> -{" "}
        {/* <span data-testid="todo_edit" onClick={() => showEdit(id)}>
          <FontAwesomeIcon icon={faCheck} />
        </span>{" "} */}
        <span data-testid="todo_edit" onClick={() => showEdit(id)}>
          <FontAwesomeIcon icon={faEdit} />
        </span>{" "}
        <span data-testid="todo_trash" onClick={() => removeTodo(id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>{" "}
      </p>
    </div>
  );
};

export default Todo;
