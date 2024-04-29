import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "movies",
  initialState: {
    airingToday: null,
    showsTrailerVideo: null,
    popularShows: null,
    onTheAir: null,
    topRatedShows: null,
  },
  reducers: {
    addAiringTodayShows: (state, action) => {
      state.airingToday = action.payload;
    },
    addShowsTrailerVideo: (state, action) => {
      state.showsTrailerVideo = action.payload;
    },
    addPopularShows: (state, action) => {
      state.popularShows = action.payload;
    },
    addOnTheAirShows: (state, action) => {
      state.onTheAir = action.payload;
    },
    addTopRatedShows: (state, action) => {
      state.topRatedShows = action.payload;
    },
  },
});

export const {
 addAiringTodayShows,
 addOnTheAirShows,
 addPopularShows,
 addTopRatedShows,
 addShowsTrailerVideo
} = tvSlice.actions;

export default tvSlice.reducer;
