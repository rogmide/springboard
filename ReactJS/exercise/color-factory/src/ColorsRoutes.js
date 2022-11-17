import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Colors from "./Colors";
import ColorDetail from "./ColorDetail";
import NewColorForm from "./NewColorForm";

function ColorsRoutes() {
  return (
    <Routes>
      <Route exact path="/colors" element={<Colors />}></Route>
      <Route exact path="/colors/new" element={<NewColorForm />}></Route>
      <Route
        key="1234234"
        exact="true"
        path="/colors/:color"
        element={<ColorDetail />}
      ></Route>
      <Route path="*" element={<Navigate exact="true" to="/colors" />}></Route>
    </Routes>
  );
}

export default ColorsRoutes;
