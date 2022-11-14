import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="link-holders">
        <p>Vending Machine Menu</p>
        <Link exact="true" to="/soda">
          - Soda -
        </Link>
        <Link exact="true" to="/coffee">
          - Coffee -
        </Link>
        <Link exact="true" to="/dog">
          - Dog -
        </Link>
      </div>
    </div>
  );
};

export default Home;
