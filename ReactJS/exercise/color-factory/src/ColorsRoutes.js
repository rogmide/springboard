import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Colors from "./Colors";
import ColorDetail from "./ColorDetail";
import ColorDB from "./ColorDB";

function ColorsRoutes() {
  return (
    <Routes>
      <Route exact path="/colors" element={<Colors />}></Route>
      {/* <Route
        key="1234234"
        exact="true"
        path="/colors/:color"
        element={<ColorDetail />}
      ></Route> */}
      {ColorDB.map((d) => (
        <Route
          key={d.colorName}
          exact="true"
          path={`/colors/:${d.colorName.toLowerCase()}`}
          element={<ColorDetail />}
        ></Route>
      ))}
      <Route path="*" element={<Navigate exact="true" to="/colors" />}></Route>
      <Route
        path="/colors/*"
        element={<Navigate exact="true" to="/colors" />}
      ></Route>
    </Routes>
  );
}

export default ColorsRoutes;
