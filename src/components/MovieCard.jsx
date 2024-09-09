import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ path }) => {
  return (
    <div>
      <div className="w-48 pr-4">
        <img src={IMAGE_CDN+path} alt="movie-img" />
      </div>
    </div>
  );
};

export default MovieCard;
