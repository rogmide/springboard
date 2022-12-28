import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import ProductList from "../Products/ProductsList";
import Cart from "../Cart/Cart";
import NavBar from "../NavBar/NavBar";

function baseRoutes() {
  return (
    <BrowserRouter>
      {/* NavBar Here */}
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Navigate exact="true" to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default baseRoutes;
