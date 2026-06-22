import { useSelector } from "react-redux";
import useMovieLogo from "../hooks/useMovieLogo";
import { IMG_CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MovieTitle = ({movie_id, title, overview}) => {

  const movieLogo = useSelector(store => store.movies?.movieLogo); //getting logo of the trailer from the store

  useMovieLogo(movie_id);

  return (
    <div className="absolute z-10 p-16 pt-64 flex flex-col gap-6 text-white">
      
      {movieLogo 
        ? <div className="w-[360px] ">
            <img src={IMG_CDN_URL + movieLogo?.file_path} alt="movie logo"/>
          </div>
    
        : <h1 className="text-8xl font-bold font-serif">{title}</h1>
      }
      <p className="w-[550px] text-lg/5">{overview}</p>

      <div className=" flex gap-3">

        <button className="bg-white hover:bg-opacity-80 rounded-[4px] w-[125px] h-11 text-black text-lg flex items-center justify-center font-roboto font-medium gap-2">
          <FontAwesomeIcon icon={faPlay} className="text-[28px] -ml-3"/>
           Play
        </button>

        <button className="bg-white/25 hover:bg-white/20 rounded-[4px] w-[164px] h-11 text-white text-lg font-roboto font-medium flex items-center justify-center gap-2">
           <span className="material-symbols-outlined text-[32px] ">
              info
            </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
