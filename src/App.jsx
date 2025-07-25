import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Navbar from "./components/navbar/Navbar";

import AllRouter from "./components/navigation-router/AllRouter.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AllRouter />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
