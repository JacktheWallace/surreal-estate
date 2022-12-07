import React from "react";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div>
      <img
        classname="logo" src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png" alt="a purple castle followed by the text Surreal Estate" />
      <ul className="navbar-links">
        <li className="navbar-links-item"><a href="https://en.wikipedia.org/wiki/Main_Page">view properties </a></li> 
        <li classname="navbar-links-item"><a href="https://en.wikipedia.org/wiki/Main_Page">add a property</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
