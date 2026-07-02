import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  
  const movies = useSelector((store) => store.movies);
  
 // console.log(movies);
  return (
    movies && (
        <div className="w-screen bg-[#141414] -mt-[68px] sm:-mt-[82px] md:-mt-[120px] lg:-mt-[134px] xl:-mt-[180px]">
            <div className="pl-5 md:pl-8 lg:pl-10 xl:pl-14 relative">
              <MovieList typeId={"tv"} title={"Recently Added K-Dramas"} movies={movies.recentlyAddedKdramas} priority={true}/>
              <MovieList title={"K-pop Movies"} movies={movies.kpopMovies} />
              <MovieList typeId={"movie"} title={"East Asian Movies"} movies={movies.eastAsianMovies} />
              <MovieList typeId={"movie"} title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
              <MovieList typeId={"movie"} title={"Top Rated Movies"} movies={movies.topRatedMovies} />
              <MovieList typeId={"tv"} title={"Popular K-Dramas"} movies={movies.popularKdramas} />
              <MovieList typeId={"tv"} title={"On The Air TV Series"} movies={movies.onTheAirTvSeries} />
                
            </div>
            
        </div>
    )
  );
};

export default SecondaryContainer;
