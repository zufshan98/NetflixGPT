import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {

  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if(!movieNames) return null;

  const allMovies = movieResults.flat();
  console.log(allMovies);

  return (
    <div className="w-9/12 flex flex-wrap justify-start gap-4 text-white p-4 m-4 mx-auto">
      
      {allMovies.length === 0 ? (
        <h1 className="text-white text-2xl pt-10 mx-auto">No results found!!</h1>
      ) : (
        allMovies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
      )}  
    </div>
  );
};

export default GptMovieSuggestions;
