import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addEastAsianMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useEastAsianMovies = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getEastAsianMovies = async () => {

    let allMovies = [];
    const countries = ["KR", "JP", "CN"];

    for (let i = 0; i < 3; i++) {
      const data = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.551&vote_average.lte=8.494&vote_count.gte=1400&with_origin_country=${countries[i]}`, API_OPTIONS);
      const json = await data.json();
      //console.log(json.results);

      allMovies = [...allMovies, ...json.results];
      //console.log(allMovies);
      
    }
    //sorting the movies on the basis of popularity
    allMovies.sort((a, b) => b.popularity - a.popularity);
    if (allMovies.length >= 30) {
      allMovies = allMovies.slice(0, 30);
      //console.log(allMovies);
    }
    //storing the fetched data in the moviesSlice(store)
    dispatch(addEastAsianMovies(allMovies));
  };

  useEffect(() => {
    //make an API call
    getEastAsianMovies();
  }, []);
};

export default useEastAsianMovies;
