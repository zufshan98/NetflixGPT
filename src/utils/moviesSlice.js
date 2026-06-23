import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        eastAsianMovies: null,
        kpopMovies: null,
        recentlyAddedKdramas: null,
        nowPlayingMovies: null,
        movieLogo: null,
        movieBackdrop:{},
        trailerVideo: {},
        movieDetails: {},
        topRatedMovies: null,
        popularKdramas: null,
        onTheAirTvSeries: null,
    },
    reducers: {
        addKpopMovies: (state, action) => {
            state.kpopMovies = action.payload;
        },
        addEastAsianMovies: (state, action) => {
            state.eastAsianMovies = action.payload;
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
        addMovieBackdrop: (state, action) => {
            const { movie_id, images} = action.payload;
            state.movieBackdrop[movie_id] = images;
        },
        addTrailerVideo: (state, action) => {
            const { movie_id, trailer} = action.payload;
            state.trailerVideo[movie_id] = trailer;
        },
        addMovieDetails: (state, action) => {
            const { movie_id, details } = action.payload;
            state.movieDetails[movie_id] = details;
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

export const { addKpopMovies, addEastAsianMovies, addRecentlyAddedKdramas, addNowPlayingMovies, addMovieBackdrop, addMovieLogo, addTrailerVideo, addMovieDetails, addTopRatedMovies, addPopularKdramas, addOnTheAirTvSeries } = moviesSlice.actions;
export default moviesSlice.reducer;