const INITIAL_STATE = { meme: { top: "", buttom: "", imgURL: "" } };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_MEME":
      return { ...state, meme: action.payload };
    case "DELETE_MEME":
      return { ...state, meme: state.count - 1 };
    default:
      return state;
  }
};

export default rootReducer;
