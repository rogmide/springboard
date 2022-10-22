const TodoList = (props) => {
  return (
    <div>
      <h4>Todo List</h4>
      <ul>
        {props.todos.map((t, i) => (
          // NEVER USER THIS TO SETUP THE KEY, INDEX IS NOT GOOD AS KEY
          <li key={i}>
            <input type="checkbox" />
            <b>{t}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
