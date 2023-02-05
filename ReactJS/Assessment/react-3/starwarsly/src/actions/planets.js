import axios from "axios";

// ACTION: LOAD_PLANET
import { LOAD_PLANET } from "./types";

function getPlanetFromAPI(id) {
  /**
   * getPlanetFromAPI
   * @param   {int} id Is the ID that is going to be use to request a planet from the API
   * @return  {name, population, climate, residents, films}
   *           Returns a planet data from the API.
   */

  return async function (dispatch) {
    // Axios request to the stawars API for the films with the id that is pass as param
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let { name, population, climate, residents, films } = res.data;

    // residents and films come as URL from API but we only need the ID so we deconstruct it from the URL
    residents = residents.map((url) => url.match(/\d+/)[0]);
    films = films.map((url) => url.match(/\d+/)[0]);

    const planet = { id, name, population, climate, residents, films };
    dispatch(gotPlanet(planet));
  };
}

function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}

export { getPlanetFromAPI };
