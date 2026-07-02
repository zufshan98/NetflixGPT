import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({typeId, title, movies, priority = false }) => {
  //console.log(movies);

  const [currentPage, setCurrentPage] = useState(0); //To stop the scroll when there is no card.
  const [translateX, setTranslateX] = useState(0); //For horizontal scroll upon clicking
  const [hoveredMovieId, setHoveredMovieId ] = useState(null); //to store the hovered movie card[instead of storing hover state in each movie card - we're lifting the state up]

  //To show cards acc to screen size
  const [visibleCount, setVisibleCount] = useState(6);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(4);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      let count;
      let leftPadding;
      let maxCardWidth;
      let gap;
      let partialCard;

      if (width >= 1280) { //xl
        count = 6;
        leftPadding = 56;
        maxCardWidth = 231;
        gap = 4;
        partialCard = 70;
      } else if (width >= 1024) { //lg
        count = 5;
        leftPadding = 40;
        maxCardWidth = 231;
        gap = 4;
        partialCard = 70;
      } else if (width >= 768) { //md
        count = 4;
        leftPadding = 32;
        maxCardWidth = 231;
        gap = 2;
        partialCard = 60;
      } else { //sm
        count = 3;
        leftPadding = 20;
        maxCardWidth = 229;
        gap = 0;
        partialCard = 40;
      }

      const availableWidth = width - leftPadding;

      const calculatedCardWidth =
        (availableWidth - partialCard - gap * count) / count;

      setVisibleCount(count);
      setCardWidth(Math.min(maxCardWidth, calculatedCardWidth));
      setGap(gap);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);


  useEffect(() => {
    setTranslateX(-(currentPage * visibleCount * (cardWidth + gap)));
  }, [currentPage, visibleCount, cardWidth, gap]);

  if (!movies) return null;

  //For the alignment of MovieInfoCard upon hover
  const firstVisibleIndex = currentPage * visibleCount;
  const lastVisibleIndex = firstVisibleIndex + visibleCount - 1;
  
  const maxPage = Math.ceil(movies.length / visibleCount) - 1;
  
  const scrollRight = () => {
    if (currentPage >= maxPage) return;
    setCurrentPage(prev => prev + 1);
  };

  const scrollLeft = () => {
    if (currentPage <= 0) return;
    setCurrentPage(prev => prev - 1);
  };


  return (
    <div className='pb-6 overflow-visible'>
      <h1 className='text-xs/6 sm:text-[13px]/6 md:text-base/6 lg:text-lg/6 xl:text-2xl/6 font-bold pb-0.5 md:py-3 md:pl-1 text-white'>{title}</h1>

      <div className={`relative group overflow-visible ${hoveredMovieId ? "z-50" : "z-10"}`}>

        <button onClick={scrollLeft} className={`${currentPage === 0 ? "hidden" : "hidden group-hover:block"} absolute -left-6 md:-left-12 xl:-left-14 top-0 h-[90px] sm:h-[127px] md:h-[130px] xl:h-[132px] w-[24px] md:w-[48px] lg:w-[50px] xl:w-[55px] bg-black/50 text-white z-[9999]`}>
          <span className="material-symbols-outlined text-3xl md:text-6xl">keyboard_arrow_left</span>
        </button>

        <div className='flex gap-0 md:gap-0.5 lg:gap-1 transition-transform duration-500 overflow-visible relative z-20 cursor-pointer' style={{transform: `translateX(${translateX}px)`}}>  

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
              cardWidth={cardWidth}
              priority={ 
                priority &&
                index >= firstVisibleIndex &&
                index <= lastVisibleIndex + 1
              }
            />
          ))}
          
        </div>

        <button onClick={scrollRight} className={`${currentPage >= maxPage ? "hidden" : "hidden group-hover:block"} absolute right-0 top-0 h-[90px] sm:h-[127px] md:h-[130px] xl:h-[132px] w-[41px] md:w-[62px] lg:w-[74px]  bg-black/50 text-white z-[9999]`}>
          <span className="material-symbols-outlined text-3xl md:text-6xl">keyboard_arrow_right</span>
        </button>
      </div>
    
        

    </div>
  );
};

export default MovieList;
