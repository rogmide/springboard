const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_MEME":
      return { ...state, memes: [...state.memes, action.payload] };
    case "DELETE_MEME":
      return {
        ...state,
        memes: [...state.memes.filter((m) => m.id !== action.payload)],
      };
    case "ADD_TODO":
      console.log(state.todos);
      return { ...state, todos: [...state.todos, action.payload] };
    case "DEL_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((t) => t.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default rootReducer;
