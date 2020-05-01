import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navbar" id="mainNav">
        
        <button type="button" className="btn btn-outline-dark">
          <Link to="/">Spring Lambs</Link>
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
