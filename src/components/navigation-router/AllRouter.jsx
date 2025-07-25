import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "../movies/Movies";
import MovieDetail from "../movies/movie-detail";

const AllRouter = () => {
  return (
    <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default AllRouter;
