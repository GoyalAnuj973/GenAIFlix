import { useEffect, useCallback } from "react";
import { addPopularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return getPopularMovies; // Optionally return the function for external use
};

export default usePopularMovies;
