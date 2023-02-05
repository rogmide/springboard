// ACTION: RESET_ALL
import { RESET_ALL } from "./types";

function resetAll() {
  /**
   * resetAll
   * @return  {ACTION_TYPE} return a ACTION_TYPE to reset all the exploration and restart exploration
   *
   */
  return { type: RESET_ALL };
}

export { resetAll };
