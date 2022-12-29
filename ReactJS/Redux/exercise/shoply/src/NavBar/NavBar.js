import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { amtItem, totalCost } = useSelector((st) => st);

  return (
    <nav
      style={{ justifyContent: "space-between", padding: "2px" }}
      className="navbar navbar-expand-md navbar-dark bg-dark"
    >
      <Link className="navbar-brand" to="/">
        Shoply
      </Link>
      <ul className="navbar-nav ml-auto">
        <li>
          <NavLink className="nav-link" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/cart">
            {amtItem} Total: {totalCost} USD
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
