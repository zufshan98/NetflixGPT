import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addEastAsianMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useEastAsianMovies = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const eastAsianMovies = useSelector(store => store.movies.eastAsianMovies);

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

    //to remove duplicate data
    let uniqueMovies = allMovies.filter(
      (movie, index, self) =>
        index === self.findIndex(m => m.id === movie.id)
    );

    //sorting the movies on the basis of popularity
    uniqueMovies.sort((a, b) => b.popularity - a.popularity);

    if (uniqueMovies.length >= 30) {
      uniqueMovies = uniqueMovies.slice(0, 30);
      //console.log(allMovies);
    }
    //storing the fetched data in the moviesSlice(store)
    dispatch(addEastAsianMovies(uniqueMovies));
  };

  useEffect(() => {
    //make an API call
    !eastAsianMovies && getEastAsianMovies();
  }, []);
};

export default useEastAsianMovies;
