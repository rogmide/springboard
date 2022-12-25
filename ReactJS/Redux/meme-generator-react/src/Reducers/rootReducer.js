const INITIAL_STATE = [
  {
    id: 1,
    top: "Sample Up",
    buttom: "Sample Down",
    imgURL:
      "https://images.unsplash.com/photo-1552664769-aeb2e3f6a67f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
];

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_MEME":
      return [...state, action.payload];
    case "DELETE_MEME":
      return [...state.filter((m) => m.id !== action.payload)];
    default:
      return state;
  }
};

export default rootReducer;
