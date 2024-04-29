import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      const filteredData = data.results.filter((video) => video.type === "Trailer");
      const trailer = filteredData.length ? filteredData[0] : data.results[0];

      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    getMovieTrailer();
  }, [getMovieTrailer]);

  return getMovieTrailer; // Optionally return the function for external use
};

export default useTrailerVideo;
