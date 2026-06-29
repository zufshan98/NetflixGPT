import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularKdramas } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularKdramas = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularKdramas = async () => {

    let allMovies = [];

    for (let page = 1; page < 3; page++) {
      const data = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&vote_average.gte=8&with_origin_country=KR&without_genres=10767%20%7C%2010764`, API_OPTIONS);
      const json = await data.json();
      //console.log(json.results);
      allMovies = [...allMovies, ...json.results];
    }

    //to remove duplicate data
    const uniqueMovies = allMovies.filter(
      (movie, index, self) =>
        index === self.findIndex(m => m.id === movie.id)
    );
    //storing the fetched data in the moviesSlice(store)
    dispatch(addPopularKdramas(uniqueMovies.slice(0, 30)));
  };

  useEffect(() => {
    //make an API call
    getPopularKdramas();
  }, []);
};

export default usePopularKdramas;
