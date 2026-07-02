import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import MovieBackground from "./MovieBackground";
import MovieInfoContainer from "./MovieInfoContainer";


const HeroMovieContainer = () => {
  //getting the first row of movie list data from the store
  const movies = useSelector((store) => store?.movies?.kpopMovies);
  

  //1st time the nowPlayingMovies is null, if its null then dont render 
  if(movies === null) return; //early return (!movies)

  const heroMovie = movies[1]; //1st movie in the list
  //console.log(heroMovie);

  const { id, overview, media_type } = heroMovie;

  return (
    <div className="relative h-3/12 xl:h-screen overflow-hidden">

      <MovieTitle movie_id={id} overview={overview} media_type={media_type} />
      <MovieBackground movie_id={id} media_type={media_type} />
      
    </div>
  );
};

export default HeroMovieContainer;

