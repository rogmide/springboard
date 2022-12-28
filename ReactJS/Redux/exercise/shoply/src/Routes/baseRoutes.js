import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import ProductList from "../Products/ProductsList";
function baseRoutes() {
  return (
    <BrowserRouter>
      {/* NavBar Here */}
      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route path="*" element={<Navigate exact="true" to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default baseRoutes;
