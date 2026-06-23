import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addKpopMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useKpopMovies = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getKpopMovies = async () => {
    
    let allMovies = [];

     
    const movieData = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&with_cast=1544084%7C1544088%7C1544086%7C1544090%7C1544092%7C1544093%7C1544095&with_genres=10402%2C99&with_origin_country=KR",API_OPTIONS);
    const movie = await movieData.json();
    movie.results = movie.results.map((item) => ({
      ...item,
      media_type: "movie",
    }));
    movie.results.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    console.log(movie.results);

    const seriesData = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=86824%7C288111&with_genres=10764%7C99%7C10767&with_origin_country=KR',API_OPTIONS);
    const series = await seriesData.json();
    series.results = series.results.map((item) => ({
      ...item,
      media_type: "tv",
    }));
    series.results.sort((a, b) => b.vote_count - a.vote_count);
    console.log(series.results);

    allMovies = [...allMovies, ...movie.results, ...series.results];
    console.log(allMovies);
 
    //sorting the movies on the basis of highest rating
    //allMovies.sort((a, b) => b.vote_count - a.vote_count);
    //storing the fetched data in the moviesSlice(store)
    dispatch(addKpopMovies(allMovies.slice(0, 30)));
  };

  useEffect(() => {
    //make an API call
    getKpopMovies();
  }, []);
};

export default useKpopMovies;
