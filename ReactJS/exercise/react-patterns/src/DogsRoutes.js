import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dogs from "./Dogs";
import DogDetails from "./DogDetails";

function DogsRoutes({ dogs }) {
  return (
    <Routes>
      <Route exact path="/" element={<Dogs />}></Route>
      <Route
        exact
        path="/whiskey"
        element={<DogDetails dog={dogs[0]} />}
      ></Route>
      <Route exact path="/duke" element={<DogDetails dog={dogs[1]} />}></Route>
      <Route exact path="/perry" element={<DogDetails dog={dogs[3]} />}></Route>
      <Route exact path="/tubby" element={<DogDetails dog={dogs[2]} />}></Route>
      <Route path="*" element={<Navigate exact="true" to="/" />}></Route>
    </Routes>
  );
}

export default DogsRoutes;
