import React from "react";
import "./NavBar.css";

const navbar = () => {
  return (
    <nav>
      <a className="hamburger" href="">
        <i className="fa fa-bars" />
      </a>
      <ul>
        <li>
          <a href="index.html#about">About</a>
        </li>
        <li>
          <a href="index.html#gallery">Sign up</a>
        </li>
        <li>
          <a href="index.html#login">Login</a>
        </li>
        <li>
          <a href="index.html#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
