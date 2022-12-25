import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((store) => store.todos);

  return (
    <>
      {" "}
      <div className="TodoList">
        <h1>Todo List</h1>
        {todos.map((t) => (
          <div key={t.id}>
            {/* {isEditForm === t.id && (
              <EditTodoForm todo={t} editTodo={editTodo} />
            )} */}
            <Todo id={t.id} text={t.text} done={t.done} scrach={t.scrach} />
          </div>
        ))}
      </div>
      <NewTodoForm />
    </>
  );
};

export default TodoList;
