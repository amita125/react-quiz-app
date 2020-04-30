import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navbar" id="mainNav">
        <Link to="/">Quiz Application</Link>
      </nav>
    </div>
  );
};

export default Navigation;
