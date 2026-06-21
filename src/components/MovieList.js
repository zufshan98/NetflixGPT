import { useState, useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({typeId, title, movies }) => {
  //console.log(movies);

  //if(!movies) return; //early return (movies===null)
  const [currentPage, setCurrentPage] = useState(0);
  const [translateX, setTranslateX] = useState(0);
 
  const scrollRight = () => {
    if (currentPage >= 4) return;

    setCurrentPage(prev => prev + 1);
    setTranslateX((prev) => prev - 1410);
  };

  const scrollLeft = () => {
    if (currentPage <= 0) return;

    setCurrentPage(prev => prev - 1);
    setTranslateX((prev) => Math.min(prev + 1410, 0));
  };


  return (
    <div className='mb-6 relative group overflow-visible'>
      <h1 className='text-2xl/6 font-bold py-3 pl-1 text-white'>{title}</h1>

      <button onClick={scrollLeft} className={`${currentPage === 0 ? "hidden" : "group-hover:block"} absolute -left-14 top-12 h-[134px] w-[56px] bg-black/50 text-white z-[9999]`}>
        <span className="material-symbols-outlined text-6xl">keyboard_arrow_left</span>
      </button>

      <div className='overflow-visible'>
        <div className='flex gap-1 transition-transform duration-500' style={{transform: `translateX(${translateX}px)`}}>  
          {movies?.map((movie, index) => <MovieCard key={movie.id} index={index} totalMovies={movies.length} typeId={typeId} movie_id={movie.id} posterPath={movie.poster_path} />)}
        </div>
      </div>
    
        <button onClick={scrollRight} className={`${currentPage >= 4 ? "hidden" : "group-hover:block"} absolute right-4 top-12 h-[132px] w-[56px] bg-black/50 text-white z-[9999]`}>
          <span className="material-symbols-outlined text-6xl">keyboard_arrow_right</span>
        </button>

    </div>
  );
};

export default MovieList;
