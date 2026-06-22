import { useState } from 'react';
import useMovieBackdrop from '../hooks/useMovieBackdrop';
import { IMG_CDN_URL } from '../utils/constants'
import MovieInfoCard from './MovieInfoCard';

const MovieCard = ({index, firstVisibleIndex, lastVisibleIndex, typeId, movie_id, posterPath, setHoveredMovieId}) => {

  const [hover, setHover] = useState(false);

  let hoverPosition;

  if (index === firstVisibleIndex) {
    hoverPosition = "left-0";
  } else if (index === lastVisibleIndex) {
    hoverPosition = "left-1/4 -translate-x-1/2";
  } else {
    hoverPosition = "left-1/2 -translate-x-1/2";
  }

  const backdropPath = useMovieBackdrop(typeId, movie_id);
  //console.log(backdropPath);

  if(!posterPath) return null;
  
  return (
    <div className={hover ? "relative z-30" : "relative z-20"}  
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
        <img className='w-full h-full object-fill rounded-[4px]' src={IMG_CDN_URL + (!backdropPath ? posterPath : backdropPath)} alt="movie poster" />
      </div>
      

      {hover && (
        <div className={`absolute -top-10 left-0 z-60 bg-red-500/30 rounded-xl ${hoverPosition}`}>
          <MovieInfoCard movie_id={movie_id} typeId={typeId} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
