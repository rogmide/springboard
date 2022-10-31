import React, { useState } from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";

const ShoppingList = () => {
  const INITIAL_STATE = [
    { id: 1, name: "Peanut Butter", qty: 2 },
    { id: 2, name: "Whole Milk", qty: 1 },
  ];

  const [item, setItem] = useState(INITIAL_STATE);

  const addItem = (name, qty) => {
    setItem((item) => [...item, { name, qty }]);
  };

  return (
    <div>
      <h3>Shopping List</h3>
      <NewItemForm addItem={addItem} />
      {item.map(({ id, name, qty }) => (
        <Item id={id} name={name} qty={qty} key={id} />
      ))}
    </div>
  );
};

export default ShoppingList;
