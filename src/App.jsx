import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <MovieList type="popular" title="Popular Movies" emoji={Fire} />
          <MovieList type="top_rated" title="Top Rated Movies" emoji={Star} />
          <MovieList type="upcoming" title="Upcoming Movies" emoji={Party} />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
