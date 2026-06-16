import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
        <div className="w-screen overflow-x-hidden bg-[#141414] -mt-48">
            <div className=" pl-14 relative">
                <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                <MovieList title={"On The Air TV Series"} movies={movies.onTheAirTvSeries} />
            </div>
            
        </div>
    )
  );
};

export default SecondaryContainer;
