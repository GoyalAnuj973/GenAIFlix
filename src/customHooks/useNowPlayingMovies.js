import { useEffect, useCallback } from "react";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);

  return getNowPlayingMovies; // Optionally return the function for external use
};

export default useNowPlayingMovies;
