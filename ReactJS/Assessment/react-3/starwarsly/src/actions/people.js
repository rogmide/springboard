import axios from "axios";

// ACTION: LOAD_PERSON
import { LOAD_PERSON } from "./types";

function getPersonFromAPI(id) {
  /**
   * <function description>
   * @param   {int} id Is the ID that is going to be use to request a Person from the API
   * @return  {name, gender, birth_year: birthYear, homeworld, films}
   *           Returns a person data from the API.
   */

  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let { name, gender, birth_year: birthYear, homeworld, films } = res.data;

    // homeworld and films come as URL from API but we only need the ID so we deconstruct it from the URL
    films = films.map((url) => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}

function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}

export { getPersonFromAPI };
