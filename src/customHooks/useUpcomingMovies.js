import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);

  return getUpcomingMovies; // Optionally return the function for external use
};

export default useUpcomingMovies;
