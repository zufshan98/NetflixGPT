import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    //storing the fetched data in the moviesSlice(store)
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    //make an API call
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
