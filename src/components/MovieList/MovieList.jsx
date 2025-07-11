import React, { useEffect, useState, useCallback } from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
import Start from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=3a0b2acf5787dec8795880fdae9ed3fa&language=en-US&page=${currentPage}`
    );
    const data = await response.json();

    // Limit to 24 movies maximum
    setMovies(data.results);
    setTotalPages(data.total_pages);
  }, [currentPage]);

  useEffect(() => {
    // Fetch movies data here
    fetchMovies();
  }, [fetchMovies]);

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

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="Popular" className="navbar_emoji" />
        </h2>

        <div className="align_center">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Start</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>

          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="align_center movie_cards">
        {movies.map((movie) => (
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
