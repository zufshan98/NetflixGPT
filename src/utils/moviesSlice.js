import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        popularMovies: null,
        onTheAirTvSeries: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addOnTheAirTvSeries: (state, action) => {
            state.onTheAirTvSeries = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addPopularMovies, addOnTheAirTvSeries } = moviesSlice.actions;
export default moviesSlice.reducer;