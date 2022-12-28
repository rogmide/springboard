import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{ justifyContent: "space-between", padding: "2px" }}
      className="navbar navbar-expand-md navbar-dark bg-dark"
    >
      <Link className="navbar-brand" to="/">
        Jobly
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
