import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="Header__link">
        <h1>Northcoders News</h1>
      </Link>
      <p>The best news in the North</p>
    </header>
  );
};

export default Header;
