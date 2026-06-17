import { useSelector } from "react-redux";
import useMovieLogo from "../hooks/useMovieLogo";
import { IMG_CDN_URL } from "../utils/constants";

const MovieTitle = ({movie_id, title, overview}) => {

  const movieLogo = useSelector(store => store.movies?.movieLogo); //getting logo of the trailer from the store

  useMovieLogo(movie_id);

  return (
    <div className="absolute z-10 p-16 pt-52 flex flex-col gap-5 text-white">
      
      {movieLogo 
        ? <div className="w-[300px] ">
            <img src={IMG_CDN_URL + movieLogo?.file_path} />
          </div>
    
        : <h1 className="text-8xl font-bold font-serif">{title}</h1>
      }
      <p className="w-[550px] text-lg/5">{overview}</p>

      <div className=" flex gap-3">
        <button className="bg-white hover:bg-opacity-80 rounded-[4px] w-32 h-11 text-black text-lg font-bold">▸ Play</button>
        <button className="bg-white/25 hover:bg-white/20 rounded-[4px] w-40 h-11 text-white text-lg font-bold">⨀ More Info</button>
      </div>
    </div>
  );
};

export default MovieTitle;
