import React from "react";
import { Link } from "react-router-dom";

function Nav({ foods }) {
  return (
    <ul>
      {foods.map((food) => (
        <li key={food}>
          {/* <Link exact="true" to="/">
            Home
          </Link> */}
          <Link exact="true" to={`/food/${food}`}>
            Show me the {food}!
          </Link>
        </li>
      ))}
    </ul>
  );
}

Nav.defaultProps = {
  foods: ["burrito", "salad", "pizza", "pasta"],
};

export default Nav;
