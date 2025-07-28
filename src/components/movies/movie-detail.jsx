import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./movie-detail.css";
const MovieDetail = () => {
  const [overviewData, setOverviewData] = useState(null);
  const [castData, setCastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  console.log("MovieDetail component is mounting/re-rendering");
  console.log("Movie ID:", params.id);

  useEffect(() => {
    console.log("useEffect is running for movie ID:", params.id);

    if (!params.id) {
      console.error("No movie ID found in params");
      setError("No movie ID provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    // Fetch movie details using params.id
    const fetchMovieOverview = async () => {
      try {
        console.log("Fetching movie overview for ID:", params.id);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=3a0b2acf5787dec8795880fdae9ed3fa&language=en-US`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Overview data received:", data);
        setOverviewData(data);
      } catch (error) {
        console.error("Error fetching movie overview:", error);
        setError(error.message);
      }
    };

    const fetchMovieCast = async () => {
      try {
        console.log("Fetching movie cast for ID:", params.id);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=3a0b2acf5787dec8795880fdae9ed3fa&language=en-US`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Cast data received:", data);
        setCastData(data);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchData = async () => {
      await fetchMovieOverview();
      await fetchMovieCast();
    };

    fetchData();
  }, [params.id]);

  const handleBack = () => {
    navigate(-1);
  };

  console.log("Overview Data:", overviewData);
  console.log("Cast Data:", castData);

  if (loading) {
    return <div className="movie-detail-loading">Loading movie details...</div>;
  }

  if (error) {
    return <div className="movie-detail-error">Error: {error}</div>;
  }

  return (
    <div
      className="movie-detail"
      style={{
        backgroundImage: overviewData?.backdrop_path
          ? `url(https://image.tmdb.org/t/p/w500${overviewData.backdrop_path})`
          : "none",
      }}
    >
      <div className="movie-detail-header">
        <div className="movie-detail-poster-container">
          <img
            src={
              overviewData
                ? `https://image.tmdb.org/t/p/w500${overviewData.poster_path}`
                : ""
            }
            alt={overviewData ? overviewData.original_title : "Movie Poster"}
            className="movie-detail-poster"
          />
        </div>

        <div className="movie-detail-info">
          <div>
            <h2>{overviewData ? overviewData.original_title : "Loading..."}</h2>
            <br />
            <p>{overviewData ? overviewData.overview : "Loading..."}</p>
            <br />
            <p>
              Release Date:{" "}
              {overviewData ? overviewData.release_date : "Loading..."}
            </p>
          </div>
          <div>
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
