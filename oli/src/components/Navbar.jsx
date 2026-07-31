import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">
                Oli
            </NavLink>

            <div className="nav-links">
                {/* <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Home
                </NavLink> */}
                <NavLink
                    to="/favorites"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Favorites
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
