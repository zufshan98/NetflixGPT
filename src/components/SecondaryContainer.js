import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
        <div className="w-screen overflow-x-hidden bg-[#141414] -mt-[180px]">
            <div className=" pl-14 relative">
                <MovieList title={"Highly Recommended Korean Movies"} movies={movies.highlyRecommendedKoreanMovies} />
                <MovieList title={"Recently Added K-Dramas"} movies={movies.recentlyAddedKdramas} />
                <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular K-Dramas"} movies={movies.popularKdramas} />
                <MovieList title={"On The Air TV Series"} movies={movies.onTheAirTvSeries} />
            </div>
            
        </div>
    )
  );
};

export default SecondaryContainer;
