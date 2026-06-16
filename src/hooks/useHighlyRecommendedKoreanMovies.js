import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addHighlyRecommendedKoreanMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useHighlyRecommendedKoreanMovies = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getHighlyRecommendedKoreanMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2026&sort_by=popularity.desc&vote_average.gte=8&with_origin_country=KR', API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    //storing the fetched data in the moviesSlice(store)
    dispatch(addHighlyRecommendedKoreanMovies(json.results));
  };

  useEffect(() => {
    //make an API call
    getHighlyRecommendedKoreanMovies();
  }, []);
};

export default useHighlyRecommendedKoreanMovies;
