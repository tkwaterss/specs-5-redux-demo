import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>HR</h2>
      <nav>
        <Link to="/">
          <button className="nav-btn">Employees</button>
        </Link>

        <Link to="/new">
          <button className="nav-btn">Add New</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
