import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
        <div className="w-screen overflow-x-hidden bg-[#141414] -mt-[180px]">
            <div className=" pl-14 relative">
                <MovieList typeId={"movie"} title={"Highly Recommended Korean Movies"} movies={movies.highlyRecommendedKoreanMovies} />
                <MovieList typeId={"tv"} title={"Recently Added K-Dramas"} movies={movies.recentlyAddedKdramas} />
                <MovieList typeId={"movie"} title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
                <MovieList typeId={"movie"} title={"Top Rated Movies"} movies={movies.topRatedMovies} />
                <MovieList typeId={"tv"} title={"Popular K-Dramas"} movies={movies.popularKdramas} />
                <MovieList typeId={"tv"} title={"On The Air TV Series"} movies={movies.onTheAirTvSeries} />*/
            </div>
            
        </div>
    )
  );
};

export default SecondaryContainer;
