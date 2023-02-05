import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilmFromAPI } from "./actions/films";
import Sublist from "./Sublist";

function Film() {
  /**
   * films
   * @param   {int} id is that is going to be use to get a film from API
   * @return
   *      Render Films Detail +
   *
   *      + <Sublist title="Planets" items={planets} /> Component:
   *            @param {string} title title for the sublist component
   *            @param {Array} items planets list for the sublist component
   *
   *      + <Sublist title="People" items={characters} /> Component:
   *            @param {string} title title for the sublist component
   *            @param {Array} items characters list for the sublist component
   *
   */
  const { id } = useParams();
  const film = useSelector((st) => st.films[id]);
  // film: that is store in redux store
  const planetState = useSelector((st) => st.planets);
  // planetState: planets State that is store in redux store for a film with id that we get with useParams
  const characterState = useSelector((st) => st.people);
  // characterState: character State that is store in redux store for a film with id that we get with useParams
  const dispatch = useDispatch();
  const missing = !film;

  useEffect(
    function () {
      if (missing) {
        dispatch(getFilmFromAPI(id));
      }
    },
    [missing, id, dispatch]
  );

  if (missing) return <h1 className="mt-5">loading...</h1>;

  // If planet is not explore already will Display Unknow
  // If planet is explore will Display Planet Name
  const planets = film.planets.map((pid) => ({
    id: pid,
    url: `/planets/${pid}`,
    display: planetState[pid] ? planetState[pid].name : "Unknown",
  }));

  // If characters is not explore already will Display Unknow
  // If characters is explore will Display Planet Name
  const characters = film.characters.map((cid) => ({
    id: cid,
    url: `/people/${cid}`,
    display: characterState[cid] ? characterState[cid].name : "Unknown",
  }));

  return (
    <div>
      <h1 className="mt-3 mb-3">
        {film.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p className="lead">{film.openingCrawl}</p>

      <p>
        <b>Director: </b>
        {film.director}
      </p>

      <Sublist title="Planets" items={planets} />
      <Sublist title="People" items={characters} />
    </div>
  );
}

export default Film;
