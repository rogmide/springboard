import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlanetFromAPI } from "./actions/planets";
import Sublist from "./Sublist";

function Planet() {
  /**
   * Planet:
   * @param   {int} id is that is going to be use to get a film from API
   * @return
   *      Render Planet Detail +
   *
   *      + <Sublist title="People" items={residents} /> Component:
   *            @param {string} title title for the sublist component
   *            @param {Array} items residents list for the sublist component
   *
   *      + <Sublist title="Films" items={films} /> Component:
   *            @param {string} title title for the sublist component
   *            @param {Array} items films list for the sublist component
   *
   */
  const { id } = useParams();
  const planet = useSelector((st) => st.planets[id]);
  // planet: that is store in redux store
  const filmState = useSelector((st) => st.films);
  // filmState: films State that is store in redux store for a planet with id that we get with useParams
  const characterState = useSelector((st) => st.people);
  // characterState: characters State that is store in redux store for a planet with id that we get with useParams
  const dispatch = useDispatch();
  const missing = !planet;

  useEffect(
    function () {
      // load planet to show on page
      if (missing) {
        dispatch(getPlanetFromAPI(id));
      }
    },
    [missing, id, dispatch]
  );

  if (missing) return "loading...";

  // If films is not explore already will Display Unknown
  // If films is explore will Display Planet Name
  const films = planet.films.map((fid) => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown",
  }));

  // If people is not explore already will Display Unknown
  // If people is explore will Display Planet Name
  const residents = planet.residents.map((pid) => ({
    id: pid,
    url: `/people/${pid}`,
    display: characterState[pid] ? characterState[pid].name : "Unknown",
  }));

  return (
    <div>
      <h1 className="mt-3 mb-3">
        {planet.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p>
        <b>Climate: </b>
        {planet.climate}
      </p>
      <p>
        <b>Population: </b>
        {planet.population}
      </p>

      <Sublist title="People" items={residents} />
      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Planet;
