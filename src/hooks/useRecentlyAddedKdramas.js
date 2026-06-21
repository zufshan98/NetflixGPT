import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addRecentlyAddedKdramas } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useRecentlyAddedKdramas = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getRecentlyAddedKdramas = async () => {

    let allMovies = [];

    for (let page = 1; page < 3; page++) {
      const data = await fetch(`https://api.themoviedb.org/3/discover/tv?first_air_date_year=2026&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_origin_country=KR`, API_OPTIONS);
      const json = await data.json();
      //console.log(json.results);
      allMovies = [...allMovies, ...json.results];
    }
    
    //storing the fetched data in the moviesSlice(store)
    dispatch(addRecentlyAddedKdramas(allMovies.slice(0, 30)));
  };

  useEffect(() => {
    //make an API call
    getRecentlyAddedKdramas();
  }, []);
};

export default useRecentlyAddedKdramas;
