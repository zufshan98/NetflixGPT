import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addKpopMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useKpopMovies = () => {
//Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getKpopMovies = async () => {
    
    let allMovies = [];

    for (let page = 1; page < 3; page++) {
      const data = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=primary_release_date.desc&with_cast=1544084%20%7C%201544088%20%7C%201544086%20%7C%201544090%20%7C%201544092%20%7C%201544093%20%7C%201544095%20%7C%201897265%20%7C%201875840%20%7C%202021730%20&with_genres=99%20%2C%2010402&with_origin_country=KR`,API_OPTIONS);

      const json = await data.json();
      //console.log(json.results);
      allMovies = [...allMovies, ...json.results];
      //console.log(allMovies);
    }
    //sorting the movies on the basis of highest rating
    //allMovies.sort((a, b) => b.vote_count - a.vote_count);
    //storing the fetched data in the moviesSlice(store)
    dispatch(addKpopMovies(allMovies.slice(0, 30)));
  };

  useEffect(() => {
    //make an API call
    getKpopMovies();
  }, []);
};

export default useKpopMovies;
