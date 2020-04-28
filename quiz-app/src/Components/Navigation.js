import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-dark bg-dark" id="mainNav">
        <Link to="/">Quiz Application</Link>
      </nav>
    </div>
  );
}
