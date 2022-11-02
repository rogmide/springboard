import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const INITIAL_STATE = [
    // default box to work with app
    { id: uuidv4(), text: "Walk the Dog", done: false, scrach: false },
  ];

  const [todos, setTodos] = useState(INITIAL_STATE);

  // Add box to the Array
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuidv4() }]);
  };

  // Remove box from the Array
  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Scrach Todo
  const scrachTodo = (id) => {
    setTodos(
      todos.filter((t) => {
        if (t.id !== id) {
          t.scrach = true;
        }
      })
    );
  };
  return (
    <>
      {" "}
      <div className="TodoList">
        <h1>Todo List</h1>
        {todos.map(({ id, text, done, scrach }) => (
          <Todo
            removeTodo={removeTodo}
            id={id}
            text={text}
            done={done}
            scrach={scrach}
            key={id}
          />
        ))}
      </div>
      <NewTodoForm addTodo={addTodo} />
    </>
  );
};

export default TodoList;
