import React from "react";
import "./Navbar.css";

import Fire from "../../assets/fire.png";
import Start from  "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar align_center">
        <h1>MovieManiac</h1>
        <div className="navbar_links align_center">
            <a href="">Popular <img src={Fire} alt="Popular" className="navbar_emoji"/></a>
            <a href="">Top Rated <img src={Start} alt="Top Rated" className="navbar_emoji" /></a>
            <a href="">Upcoming <img src={Party} alt="Upcoming" className="navbar_emoji" /></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
