import { useDispatch, useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";
import MovieVideo from "./MovieVideo";
import { setMoreInfoView } from "../utils/moviesSlice";
import SimilarMovieCard from "./SimilarMovieCard";
import useSimilarMovies from "../hooks/useSimilarMovies";

const MovieInfoContainer = ({movie_id, typeId}) => {

  const dispatch = useDispatch();

  const similarMovie = useSelector(store => store.movies.similarMovies);
  
  console.log(movie_id);
  useSimilarMovies(movie_id, typeId);

  const handleMoreInfoViewClose = () => {
    dispatch(
      setMoreInfoView({
        open: false,
        movie_id: null,
        typeId: null,
      })
    );
  }

  return (

    <div className="fixed inset-0 z-50 bg-black/70 overflow-y-auto no-scrollbar overscroll-contain">

      <div className="relative mx-auto my-8 w-[94%] lg:w-[56%] bg-[#181818] rounded-t-lg overflow-hidden">
      
      <div className="absolute z-10 right-5 top-3 w-9 h-9 bg-[#181818] text-white rounded-full flex items-center justify-center cursor-pointer" onClick={handleMoreInfoViewClose}>
        <span className="material-symbols-outlined text-3xl">close</span>
      </div>
    
      <MovieVideo movie_id={movie_id} typeId={typeId} />
      
      <MovieDetails  movie_id={movie_id} typeId={typeId}/>

      <h1 className="px-12 text-white text-2xl mt-12 mb-5 font-medium">More Like This</h1>

      <div className="w-full flex flex-wrap px-12 gap-4 mb-4">
        
        {similarMovie?.map(movie =>
          <SimilarMovieCard 
            key={movie.id} 
            movie_id={movie.id} 
            typeId={movie.media_type} 
            release_date={movie?.release_date || movie?.first_air_date} 
            image={movie.image} 
            posterPath={movie.poster_path} 
            overview={movie.overview} 
          />
        )}
      </div>
      
    </div>
    </div>
    
  );
};

export default MovieInfoContainer;
