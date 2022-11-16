import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dogs from "./Dogs";
import DogDetails from "./DogDetails";

function DogsRoutes({ dogs }) {
  return (
    <Routes>
      <Route exact path="/" element={<Dogs dogs={dogs} />}></Route>
      {dogs.map((d) => (
        <Route
          key={d.name}
          exact
          path={`/${d.name}`}
          element={<DogDetails dog={d} />}
        ></Route>
      ))}
      <Route path="*" element={<Navigate exact="true" to="/" />}></Route>
    </Routes>
  );
}

export default DogsRoutes;
