import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./movie-detail.css";
import { repeat } from "lodash";
const MovieDetail = () => {
  const [overviewData, setOverviewData] = useState(null);
  const [castData, setCastData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch movie details using params.id
    const fetchMovieOverview = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3a0b2acf5787dec8795880fdae9ed3fa&language=en-US`
      );
      const data = await response.json();
      setOverviewData(data);
    };

    const fetchMovieCast = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=3a0b2acf5787dec8795880fdae9ed3fa&language=en-US`
      );
      const data = await response.json();
      setCastData(data);
    };

    fetchMovieOverview();
    fetchMovieCast();
  }, [params.id]);

    const handleBack = () => {
      navigate(-1);
    };

  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <img
          src={
            overviewData
              ? `https://image.tmdb.org/t/p/w500${overviewData.poster_path}`
              : ""
          }
          alt={overviewData ? overviewData.original_title : "Movie Poster"}
          className="movie-detail-poster"
        />
        <div className="movie-detail-info">
          <h2>{overviewData ? overviewData.original_title : "Loading..."}</h2>
          <br />
          <p>{overviewData ? overviewData.overview : "Loading..."}</p>
          <p>
            Release Date:{" "}
            {overviewData ? overviewData.release_date : "Loading..."}
          </p>
        </div>        
      </div>      
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default MovieDetail;
