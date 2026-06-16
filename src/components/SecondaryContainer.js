import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
        <div className="w-screen overflow-x-hidden bg-[#141414] -mt-48">
            <div className=" pl-14 relative">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
            </div>
            
        </div>
    )
  );
};

export default SecondaryContainer;
