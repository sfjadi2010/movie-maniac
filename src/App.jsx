import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <MovieList />
        </main>
      </div>
    </>
  );
};

export default App;
