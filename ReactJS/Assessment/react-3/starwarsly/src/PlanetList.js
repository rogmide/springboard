import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

function PlanetList() {
  /**
   * PlanetList:
   * @return  {<ItemList />} Component
   *           Return a ItemList to render the item that going to be show on page
   */

  // Get all the items that are store into redux store with the Key: planets
  // this item are going to be pass down as props to ItemList Component
  const items = useSelector((st) =>
    Object.values(st.planets).map((p) => ({ ...p, url: `/planets/${p.id}` }))
  );
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;
