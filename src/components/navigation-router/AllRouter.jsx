import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "../movies/Movies";

const AllRouter = () => {
  return (
    <Routes>
        <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

export default AllRouter;
