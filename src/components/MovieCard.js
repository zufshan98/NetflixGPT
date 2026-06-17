import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  
  return (
    <div className='w-52 h-56'>
      <img className='w-full h-full object-fill rounded-[4px]' src={IMG_CDN_URL + posterPath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
