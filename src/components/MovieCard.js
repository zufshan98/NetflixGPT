import { useState } from 'react';
import useMovieBackdrop from '../hooks/useMovieBackdrop';
import { IMG_CDN_URL } from '../utils/constants'
import HoverCard from './HoverCard';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MovieCard = ({index, firstVisibleIndex, lastVisibleIndex, typeId, movie_id, posterPath, setHoveredMovieId, priority}) => {

  const [hover, setHover] = useState(false);

  const movieBackdrop = useSelector(store => store.movies?.movieBackdrop[movie_id]);

  let hoverPosition;

  if (index === firstVisibleIndex) {
    hoverPosition = "left-0";
  } else if (index === lastVisibleIndex) {
    hoverPosition = "left-1/4 -translate-x-1/2";
  } else {
    hoverPosition = "left-1/2 -translate-x-1/2";
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  useMovieBackdrop(typeId, movie_id, posterPath, priority || inView);
  console.log(inView);

  //if(!movieBackdrop) return;
  
  return (
    <div ref={ref} className={hover ? "relative z-30" : "relative z-20"}  
      onMouseEnter={() => {
        setHover(true); 
        setHoveredMovieId(movie_id);
      }} 
      onMouseLeave={() => {
        setHover(false);
        setHoveredMovieId(null);
      }}
    >

      <div className='w-[231px] h-[132px]'>
        <img className='w-full h-full object-fill rounded-[4px]' src={IMG_CDN_URL + (movieBackdrop || posterPath)} alt="movie poster" />
      </div>
      

        {hover && (
          <div className={`absolute -top-10 z-60 rounded-xl origin-center ${hoverPosition}`}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.25, ease: "easeOut" }}
            >
              <HoverCard movie_id={movie_id} typeId={typeId} />
            </motion.div>
          </div>
          )}

    </div>
  );
};

export default MovieCard;
