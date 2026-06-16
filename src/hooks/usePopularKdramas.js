import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularKdramas } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularKdramas = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularKdramas = async () => {
    const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc&vote_average.gte=8&with_origin_country=KR', API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    //storing the fetched data in the moviesSlice(store)
    dispatch(addPopularKdramas(json.results));
  };

  useEffect(() => {
    //make an API call
    getPopularKdramas();
  }, []);
};

export default usePopularKdramas;
