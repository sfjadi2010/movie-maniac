import React from "react";

const FilterGroup = ({ minRating, handleFilter, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rating) => (
        <li
          key={rating}
          className={
            minRating === rating
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => handleFilter(rating)}
        >
          {rating}+ ⭐
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
