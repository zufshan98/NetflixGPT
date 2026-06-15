import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import MovieBackground from "./MovieBackground";


const HeroMovieContainer = () => {

  const movies = useSelector(store => store?.movies?.nowPlayingMovies);

  //1st time the nowPlayingMovies is null, if its null then dont render 
  if(movies === null) return; //early return (!movies)

  const heroMovie = movies[0]; //1st movie in the list
  console.log(heroMovie);

  const { original_title, overview, id } = heroMovie;

  return (
    <div>

      <MovieTitle title={original_title} overview={overview} />
      <MovieBackground movie_id={id} />
      
      
    </div>
  );
};

export default HeroMovieContainer;

