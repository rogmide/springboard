import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";

const NavBar = () => {
  const amtItem = useSelector((st) => st.cartItems);
  let total = 0;

  const itemTotal = () => {
    Object.keys(amtItem).map((id) => {
      total += amtItem[id];
    });
  };

  itemTotal();

  return (
    <nav
      style={{ justifyContent: "space-between", padding: "2px" }}
      className="navbar navbar-expand-md navbar-dark bg-dark"
    >
      <Link className="navbar-brand" to="/">
        Shoply
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/cart">
            {total}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
