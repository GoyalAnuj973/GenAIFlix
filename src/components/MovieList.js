import React from "react";
import MovieCard from "./MovieCard";
import '../index.css'

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 ">
      <div>
        <h1 className="text-3xl font-bold text-left pb-4 text-white">{title}</h1>
      </div>

      <div className="flex overflow-x-scroll " >
        <div className=" flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
