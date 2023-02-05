import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPersonFromAPI } from "./actions/people";
import Sublist from "./Sublist";

function Person() {
  /**
   * films
   * @param   {int} id is that is going to be use to get a person from API
   * @return
   *      Render person Detail +
   *
   *      + <Sublist title="Films" items={films} /> Component:
   *            @param {string} title title for the sublist component
   *            @param {Array} items films list for the sublist component
   */

  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector((st) => st.people[id]);
  // person: that is store in redux store
  const planetState = useSelector((st) => st.planets);
  // planetState: planets State that is store in redux store for a person with id that we get with useParams
  const filmState = useSelector((st) => st.films);
  // filmState: films State that is store in redux store for a person with id that we get with useParams
  const missing = !person;

  useEffect(
    function () {
      // load person to show on page
      if (missing) {
        dispatch(getPersonFromAPI(id));
      }
    },
    [id, missing, dispatch]
  );

  if (missing) return "loading...";

  const hw = person.homeworld;

  // If planet is not explore already will Display Unknow
  // If planet is explore will Display Planet Name
  const homeworld = {
    id: hw,
    url: `/planets/${hw}`,
    display: planetState[hw] ? planetState[hw].name : "Unknown",
  };

  // If films is not explore already will Display Unknown
  // If films is explore will Display Planet Name
  const films = person.films.map((fid) => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown",
  }));

  return (
    <div>
      <h1 className="my-3">
        {person.name}
        <small className="text-muted float-right">{person.id}</small>
      </h1>

      <p>
        <b>Gender: </b>
        {person.gender}
      </p>
      <p>
        <b>Birth Year: </b>
        {person.birthYear}
      </p>
      <p>
        <b>Homeworld: </b>
        <Link to={homeworld.url}>{homeworld.display}</Link>
      </p>

      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Person;
