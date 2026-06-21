import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {

    let allMovies = [];

    for (let page = 1; page < 3; page++) {
      const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, API_OPTIONS);
      const json = await data.json();
      //console.log(json.results);
      allMovies = [...allMovies, ...json.results];
    }
    
    //storing the fetched data in the moviesSlice(store)
    dispatch(addTopRatedMovies(allMovies.slice(0, 30)));
  };

  useEffect(() => {
    //make an API call
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
