import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/about"> About </Link> </li>
        <li> <Link to="/contact"> Contact </Link> </li>
        <li> <Link to="/shop"> Shop </Link> </li>
        <li> <Link to="/blogs"> Blogs </Link> </li>
        <li> <Link to="/services"> Services </Link> </li>
     
      </ul>
    </div>
  );
};

export default Navbar;
