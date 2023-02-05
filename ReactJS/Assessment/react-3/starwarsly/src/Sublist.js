import React from "react";
import { Link } from "react-router-dom";

function Sublist({ title, items }) {
  /**
   * ItemList:
   * @param   {Array} items items that are going to be use to build the list
   * @param   {string} title title that will be display for the list
   * @return  Render a list (ul) with the items that we get from param
   *
   */
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>{item.display}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sublist;
