import { useState } from 'react';
import useMovieBackdrop from '../hooks/useMovieBackdrop';
import { IMG_CDN_URL } from '../utils/constants'
import MovieInfoCard from './MovieInfoCard';

const MovieCard = ({typeId, movie_id, posterPath}) => {

  const [hover, setHover] = useState(false);

  const backdropPath = useMovieBackdrop(typeId, movie_id);
  //console.log(backdropPath);

  if(!posterPath) return null;
  
  return (
    <div className='relative shrink-0' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

      <div className='w-[231px] h-[132px]'>
        <img className='w-full h-full object-fill rounded-[4px]' src={IMG_CDN_URL + (!backdropPath ? posterPath : backdropPath)} alt="movie poster" />
      </div>
      

      {hover && (
        <div className='absolute -top-10 left-0 z-50 rounded-xl'>
          <MovieInfoCard movie_id={movie_id} typeId={typeId} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
