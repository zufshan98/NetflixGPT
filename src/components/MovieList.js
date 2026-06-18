import MovieCard from './MovieCard';

const MovieList = ({typeId, title, movies }) => {
  //console.log(movies);

  //if(!movies) return; //early return (movies===null)
 

  return (
    <div className='mb-6'>
      <h1 className='text-2xl/6 font-bold py-3 pl-1 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        
        <div className='flex gap-1'>
            {movies?.map(movie => <MovieCard key={movie.id} typeId={typeId} name={(!movie.title) ? movie.name : movie.title} movie_id={movie.id} posterPath={movie.poster_path} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
