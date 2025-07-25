import React, { useEffect, useState, useCallback } from "react";
import _ from "lodash";

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import Start from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({ by: "default", order: "asc" }); // Default sort by date

  const fetchMovies = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=3a0b2acf5787dec8795880fdae9ed3fa&language=en-US&page=${currentPage}`
    );
    const data = await response.json();

    // Limit to 24 movies maximum
    setMovies(data.results);
    setFilteredMovies(data.results);
    setTotalPages(data.total_pages);
  }, [currentPage]);

  useEffect(() => {
    // Fetch movies data here
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      setFilteredMovies(sortedMovies);
    }
  }, [sort, filteredMovies]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFilter = (rating) => {
    if (rating === minRating) {
      // If the same rating is clicked, reset to show all movies
      setFilteredMovies(movies);
      setMinRating(0);
      return;
    }

    setMinRating(rating);
    const filteredMovies = movies.filter(
      (movie) => movie.vote_average >= rating
    );
    setFilteredMovies(filteredMovies);
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prevSort) => ({ ...prevSort, [name]: value }));
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="Popular" className="navbar_emoji" />
        </h2>

        <div className="align_center">
          <FilterGroup
            minRating={minRating}
            handleFilter={handleFilter}
            ratings={[8, 7, 6, 5]}
          />

          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="align_center movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="align_center movie_pagination">
        <button
          className="movie_pagination_btn"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="movie_pagination_info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="movie_pagination_btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default MovieList;
