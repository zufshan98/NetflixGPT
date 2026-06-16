import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-56 h-52'>
      <img className='w-full h-full object-cover rounded-[4px]' src={IMG_CDN_URL + posterPath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
