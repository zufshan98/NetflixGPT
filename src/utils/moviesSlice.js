import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        highlyRecommendedKoreanMovies: null,
        recentlyAddedKdramas: null,
        nowPlayingMovies: null,
        movieLogo: null,
        trailerVideo: null,
        topRatedMovies: null,
        popularKdramas: null,
        onTheAirTvSeries: null,
    },
    reducers: {
        addHighlyRecommendedKoreanMovies: (state, action) => {
            state.highlyRecommendedKoreanMovies = action.payload;
        },
        addRecentlyAddedKdramas: (state, action) => {
            state.recentlyAddedKdramas = action.payload;
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieLogo: (state, action) => {
            state.movieLogo = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularKdramas: (state, action) => {
            state.popularKdramas = action.payload;
        },
        addOnTheAirTvSeries: (state, action) => {
            state.onTheAirTvSeries = action.payload;
        },
    },
});

export const { addHighlyRecommendedKoreanMovies, addRecentlyAddedKdramas, addNowPlayingMovies, addMovieLogo, addTrailerVideo, addTopRatedMovies, addPopularKdramas, addOnTheAirTvSeries } = moviesSlice.actions;
export default moviesSlice.reducer;