import useMovieBackdrop from '../hooks/useMovieBackdrop';
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({typeId, name, movie_id, posterPath}) => {

  const backdropPath = useMovieBackdrop(typeId, name, movie_id);
  console.log(backdropPath);

  if(!posterPath) return null;
  
  return (
    <div className='w-[231px] h-[132px]'>
      <img className='w-full h-full object-fill rounded-[4px]' src={IMG_CDN_URL + (!backdropPath ? posterPath : backdropPath)} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
