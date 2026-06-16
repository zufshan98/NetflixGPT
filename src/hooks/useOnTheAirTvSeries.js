import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addOnTheAirTvSeries } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useOnTheAirTvSeries = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getOnTheAirTvSeries = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?page=1', API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    //storing the fetched data in the moviesSlice(store)
    dispatch(addOnTheAirTvSeries(json.results));
  };

  useEffect(() => {
    //make an API call
    getOnTheAirTvSeries();
  }, []);
};

export default useOnTheAirTvSeries;
