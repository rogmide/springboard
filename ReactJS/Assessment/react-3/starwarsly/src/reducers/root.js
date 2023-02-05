import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";

//  Combine Reducers into One Reducer using Films, planets, people reducer
export default combineReducers({
  films,
  planets,
  people,
});
