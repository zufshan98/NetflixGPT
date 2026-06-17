import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import MovieBackground from "./MovieBackground";


const HeroMovieContainer = () => {
  //getting the first row of movie list data from the store
  const movies = useSelector((store) => store?.movies?.highlyRecommendedKoreanMovies);

  //1st time the nowPlayingMovies is null, if its null then dont render 
  if(movies === null) return; //early return (!movies)

  const heroMovie = movies[0]; //1st movie in the list
  //console.log(heroMovie);

  const { name, overview, id } = heroMovie;

  return (
    <div className="relative h-screen overflow-hidden">

      <MovieTitle movie_id={id} title={name} overview={overview} />
      <MovieBackground movie_id={id} />
      
      
    </div>
  );
};

export default HeroMovieContainer;

