import { useEffect, useCallback } from "react";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);

  return getTopRatedMovies; // Optionally return the function for external use
};

export default useTopRatedMovies;
