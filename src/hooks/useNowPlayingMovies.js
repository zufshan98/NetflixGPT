import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    
    let allMovies = [];

    for (let page = 1; page < 3; page++) {
      const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${page}`,API_OPTIONS);

      const json = await data.json();
      //console.log(json.results);
      //There was a duplicate data, to remove the data with this id
      const result = json.results.filter(
        movie => movie.id !== 454639
      );
      allMovies = [...allMovies, ...result];
      //console.log(allMovies);
    }

    //to remove duplicate data
    const uniqueMovies = allMovies.filter(
      (movie, index, self) =>
        index === self.findIndex(m => m.id === movie.id)
    );
    //storing the fetched data in the moviesSlice(store)
    dispatch(addNowPlayingMovies(uniqueMovies.slice(0, 30)));
  };

  useEffect(() => {
    //make an API call
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
