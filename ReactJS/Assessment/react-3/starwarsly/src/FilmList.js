import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

function FilmList() {
  /**
   * FilmList:
   * @return  {<ItemList />} Component
   *           Return a ItemList to render the item that going to be show on page
   */

  // Get all the items that are store into redux store with the Key: films
  // this item are going to be pass down as props to ItemList Component
  const items = useSelector((st) =>
    Object.values(st.films).map((f) => ({ ...f, url: `/films/${f.id}` }))
  );

  // Render a component with all the items that are pass down
  return <ItemList title="Films" items={items} />;
}

export default FilmList;
