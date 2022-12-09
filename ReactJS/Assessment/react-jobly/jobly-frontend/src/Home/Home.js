import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const NeedLogIn = () => {
  return (
    <div>
      <Link className="btn btn-secondary mr-2" to="/login">
        Log in
      </Link>
      <Link className="btn btn-secondary" to="/signup">
        Sign up
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <div className="Home">
      <div className="container text-center">
        <h1 className="mb-3 font-weight-bold" style={{ color: "#343a40" }}>
          Jobly
        </h1>
        <p>All the jobs in one, convenient place.</p>
        {/* Need to add Login */}
        {NeedLogIn()}
      </div>
    </div>
  );
};

export default Home;
