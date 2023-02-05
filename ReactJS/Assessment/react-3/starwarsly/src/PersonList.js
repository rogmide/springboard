import React from "react";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";

function PersonList() {
  /**
   * FilmList:
   * @return  {<ItemList />} Component
   *           Return a ItemList to render the item that going to be show on page
   */

  // Get all the items that are store into redux store with the Key: people
  // this item are going to be pass down as props to ItemList Component
  const items = useSelector((st) =>
    Object.values(st.people).map((p) => ({ ...p, url: `/people/${p.id}` }))
  );
  return <ItemList title="People" items={items} />;
}

export default PersonList;
