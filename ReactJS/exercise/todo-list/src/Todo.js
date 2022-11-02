import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";

const Todo = ({ id, text, done, scrach, removeTodo, showEdit }) => {
  return (
    <div className="Todo" key={id}>
      <p>
        {text} -{" "}
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
