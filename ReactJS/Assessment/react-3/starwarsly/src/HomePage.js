import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { resetAll } from "./actions/reset";

function HomePage() {
  /**
   * HomePage: Component
   * @return  Render a Button and the Background Img for the HomePage
   */

  // loaded: control to Start or Reset Exploration
  const loaded = useSelector((st) => st.films[1] !== undefined);
  // dispatch: dispatch is use to dispatch actions
  const dispatch = useDispatch();

  function reset() {
    /**
     * reset:
     *      dispatch reset all action to reset the app
     */
    dispatch(resetAll());
  }

  return (
    <>
      {loaded ? (
        <button className="btn btn-danger btn-block btn-lg" onClick={reset}>
          Reset To Fresh Exploration
        </button>
      ) : (
        <Link to="/films/1" className="btn btn-primary btn-block btn-lg">
          Start with &ldquo;A New Hope&rdquo;
        </Link>
      )}
      <img
        className="mt-3 mb-5 w-100"
        alt="StarWars.ly"
        src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
      />
    </>
  );
}

export default HomePage;
