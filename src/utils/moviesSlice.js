import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        eastAsianMovies: null,
        kpopMovies: null,
        recentlyAddedKdramas: null,
        nowPlayingMovies: null,
        movieBackdrop:{},
        heroMovie: null,
        movieDetails: {},
        topRatedMovies: null,
        popularKdramas: null,
        onTheAirTvSeries: null,
        showMoreInfo: {
            open: false,
            movie_id: null,
            typeId: null,
        },
        similarMovies:null,
        similarMovieImage:{},
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
        addMovieBackdrop: (state, action) => {
            const { movie_id, images} = action.payload;
            state.movieBackdrop[movie_id] = images;
        },
        addHeroMovie: (state, action) => {
            state.heroMovie = action.payload;
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
        setMoreInfoView: (state, action) => {
            state.showMoreInfo = action.payload;
        },
        addSimilarMovies: (state, action) => {
            state.similarMovies = action.payload;
        },
        addSimilarMovieImage: (state, action) => {
            const { movie_id, image_path } = action.payload;
            state.similarMovieImage[movie_id] = image_path;
        },
    },
});

export const { addKpopMovies, addEastAsianMovies, addRecentlyAddedKdramas, addNowPlayingMovies, addMovieBackdrop, addHeroMovie, addMovieDetails, addTopRatedMovies, addPopularKdramas, addOnTheAirTvSeries, setMoreInfoView, addSimilarMovies, addSimilarMovieImage } = moviesSlice.actions;
export default moviesSlice.reducer;