import React from "react";
import "./Navbar.css";
import { useTheme } from "../../contexts/ThemeContext.jsx";

import Fire from "../../assets/fire.png";
import Start from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <>
      <nav className="navbar align_center">
        <h1>MovieManiac</h1>
        <div className="navbar_links align_center">
          <a href="#popular">
            Popular <img src={Fire} alt="Popular" className="navbar_emoji" />
          </a>
          <a href="#top_rated">
            Top Rated{" "}
            <img src={Start} alt="Top Rated" className="navbar_emoji" />
          </a>
          <a href="#upcoming">
            Upcoming <img src={Party} alt="Upcoming" className="navbar_emoji" />
          </a>

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
