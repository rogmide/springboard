import axios from "axios";

// ACTION: LOAD_FILM
import { LOAD_FILM } from "./types";

function getFilmFromAPI(id) {
  /**
   * getFilmFromAPI
   * @param   {int} id Is the ID that is going to be use to request the Film from the API
   * @return  {title: name, director, opening_crawl: openingCrawl, characters, planets,}
   *           Returns the film data from the API.
   */

  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets,
    } = res.data;

    // characters and planets come as URL from API but we only need the ID so we deconstruct it from the URL
    characters = characters.map((url) => url.match(/\d+/)[0]);
    planets = planets.map((url) => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}

function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}

export { getFilmFromAPI };
