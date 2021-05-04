import React from "react";
import { Link } from "react-router-dom";
import "./DetailNav.css";

const DetailNav = () => {
  return (
    <nav className="detail-nav">
      <h1>Jordan</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default DetailNav;
