import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const INITIAL_STATE = [
    // default box to work with app
    { id: uuidv4(), text: "Walk the Dog", done: false, scrach: false },
  ];

  const [todos, setTodos] = useState(INITIAL_STATE);
  const [isEditForm, setIsEditForm] = useState("");

  // Add box to the Array
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuidv4() }]);
    setIsEditForm("");
  };

  // Remove box from the Array
  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    setIsEditForm("");
  };

  // Show Edit Todo
  const showEdit = (id) => {
    setIsEditForm(`${id}`);
  };

  // Doing a remove Todo insted of a change on the state,
  // Having hard time making the State to reload properly
  const editTodo = (eTodo) => {
    removeTodo(eTodo.id);
    setTodos((todos) => [...todos, { ...eTodo }]);
  };

  return (
    <>
      {" "}
      <div className="TodoList">
        <h1>Todo List</h1>
        {todos.map((t) => (
          <div key={t.id}>
            {isEditForm === t.id && (
              <EditTodoForm todo={t} editTodo={editTodo} />
            )}
            <Todo
              removeTodo={removeTodo}
              showEdit={() => showEdit(t.id)}
              id={t.id}
              text={t.text}
              done={t.done}
              scrach={t.scrach}
            />
          </div>
        ))}
      </div>
      <NewTodoForm addTodo={addTodo} />
    </>
  );
};

export default TodoList;
