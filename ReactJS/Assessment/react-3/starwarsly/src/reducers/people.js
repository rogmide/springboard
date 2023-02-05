// ACTION TYPES: LOAD_PERSON, RESET_ALL
import { LOAD_PERSON, RESET_ALL } from "../actions/types";

// INITIAL_STATE of the state
const INITIAL_STATE = {};

function people(state = INITIAL_STATE, action) {
  /**
   * people
   * @param   {obj} state is going to store the people that are requested from API
   * @param   {string} action is the action that is going to execute on the call
   * @return  {obj} state
   *           Return the state for every switch case depending on the ACTION TYPE
   */
  switch (action.type) {
    // Reducer reset the state to {} to start new exploration
    case RESET_ALL:
      return { ...INITIAL_STATE };

    // Reducer make immutable updates, by copying the existing state and making changes to the copied values.
    case LOAD_PERSON:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
      };

    // If not ACTION happen will return state as default
    default:
      return state;
  }
}

export default people;
