import React, { useState } from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import SimpleForm from "./SimpleForm";
import { v4 as uuidv4 } from "uuid";

const ShoppingList = () => {
  const INITIAL_STATE = [
    { id: uuidv4(), name: "Peanut Butter", qty: 2 },
    { id: uuidv4(), name: "Whole Milk", qty: 1 },
  ];

  const [item, setItem] = useState(INITIAL_STATE);

  const addItem = (newItem) => {
    setItem((item) => [...item, { ...newItem, id: uuidv4() }]);
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
