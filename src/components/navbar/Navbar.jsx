import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { useTheme } from "../../contexts/ThemeContext.jsx";

import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <>
      <nav className="navbar align_center">
        <h1>MovieManiac</h1>
        <div className="navbar_links align_center">
          <NavLink to="/movies?type=popular&title=Popular Movies&emoji=fire">Popular <img src={Fire} alt="Popular" className="navbar_emoji" /></NavLink>
          <NavLink to="/movies?type=top_rated&title=Top Rated Movies&emoji=star">Top Rated <img src={Star} alt="Top Rated" className="navbar_emoji" /></NavLink>
          <NavLink to="/movies?type=upcoming&title=Upcoming Movies&emoji=party">Upcoming <img src={Party} alt="Upcoming" className="navbar_emoji" /></NavLink>

          <div className="theme_toggle_container">
            <label className="theme_slider">
              <input
                type="checkbox"
                checked={!isDark}
                onChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <span className="slider">
                <span className="slider_icon slider_icon_left">🌙</span>
                <span className="slider_icon slider_icon_right">☀️</span>
              </span>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
