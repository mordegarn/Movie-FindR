import { style } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import  "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <Link to="/" className="logo">
          Movie Find<span className="r">R</span>
        </Link>
        <nav className="nav">
          <ul className="ul">
            <li>
                
              <NavLink className="navlink" to="/favourites">Favourites</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
