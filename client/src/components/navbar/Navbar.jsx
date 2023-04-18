import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">YourHotel</span>
        </Link>
        {user ? (
          <div>
            {user.username}
            <Link to="/logout" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="navButton">Logout</button>
            </Link>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="navButton">Login</button>
            </Link>
            {/* <button className="navButton">Register</button> */}
            {/* <button className="navButton">Login</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
