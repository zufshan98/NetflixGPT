import { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({typeId, title, movies }) => {
  //console.log(movies);

  const [currentPage, setCurrentPage] = useState(0); //To stop the scroll when there is no card.
  const [translateX, setTranslateX] = useState(0); //For horizontal scroll upon clicking
  const [hoveredMovieId, setHoveredMovieId ] = useState(null); //to store the hovered movie card[instead of storing hover state in each movie card - we're lifting the state up]

  //For the alignment of MovieInfoCard upon hover
  const visibleCount = 6;

  const firstVisibleIndex = currentPage * visibleCount;
  const lastVisibleIndex = firstVisibleIndex + visibleCount - 1;
  
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

  if(!movies) return; //early return (movies===null)


  return (
    <div className='mb-6 overflow-visible'>
      <h1 className='text-2xl/6 font-bold py-3 pl-1 text-white'>{title}</h1>

      <div className={`relative group overflow-visible ${hoveredMovieId ? "z-50" : "z-10"}`}>

        <button onClick={scrollLeft} className={`${currentPage === 0 ? "hidden" : "hidden group-hover:block"} absolute -left-14 top-0 h-[134px] w-[56px] bg-black/50 text-white z-[9999]`}>
          <span className="material-symbols-outlined text-6xl hover:scale-150">keyboard_arrow_left</span>
        </button>

        <div className='flex gap-1 transition-transform duration-500 overflow-visible relative z-20' style={{transform: `translateX(${translateX}px)`}}>  

          {movies?.map((movie, index) => (
            <MovieCard 
              key={movie.id} 
              index={index} 
              firstVisibleIndex={firstVisibleIndex}
              lastVisibleIndex={lastVisibleIndex}
              typeId={movie.media_type || typeId} 
              movie_id={movie.id} 
              posterPath={movie.poster_path}
              setHoveredMovieId={setHoveredMovieId}
            />
          ))}
          
        </div>

        <button onClick={scrollRight} className={`${currentPage >= 4 ? "hidden" : "hidden group-hover:block"} absolute right-4 top-0 h-[132px] w-[56px] bg-black/50 text-white z-[9999]`}>
          <span className="material-symbols-outlined text-6xl hover:scale-150">keyboard_arrow_right</span>
        </button>
      </div>
    
        

    </div>
  );
};

export default MovieList;
