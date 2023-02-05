import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items, title }) {
  /**
   * ItemList:
   * @param   {Array} items items that are going to be use to build the list
   * @param   {string} title title that will be display for the list
   * @return  Render a list (ul) with the items that we get from param
   *
   */
  return (
    <>
      <h1 className="my-3">{title}</h1>
      {items.length !== 0 ? (
        <ul style={{ fontSize: "120%" }}>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>
                {item.name} <small className="text-muted">{item.id}</small>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't explored any items of this type yet.</p>
      )}
    </>
  );
}

export default ItemList;
