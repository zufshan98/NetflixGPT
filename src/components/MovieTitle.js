import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import useHeroMovieDetails from "../hooks/useHeroMovie";
import { setMoreInfoView } from "../utils/moviesSlice";

const MovieTitle = ({movie_id, overview, media_type}) => {

  const dispatch = useDispatch();

  const heroMovie = useSelector(store => store.movies?.heroMovie); //getting logo of the trailer from the store

  useHeroMovieDetails(movie_id, media_type);

  if (!heroMovie) return;

  //console.log(heroMovie);
  //console.log(movie_id, media_type);

  const handleMoreInfoClick = () => {
     //Toggle GPT Search
      dispatch(
        setMoreInfoView({
          open: true,
          movie_id,
          typeId: media_type,
        })
      );
  }

  return (
    <div className="absolute z-10 left-16 top-[300px] w-[550px] text-white ">

      {/* Logo + description area */}
      <div className="absolute -bottom-[178px] flex flex-col gap-6">
      
        {heroMovie 
          ? <img className="w-96 max-h-60 object-contain object-left" src={IMG_CDN_URL + heroMovie?.images?.logos[0]?.file_path} alt="movie logo"/>
      
          : <h1 className="text-8xl font-bold font-serif">{heroMovie?.title || heroMovie?.name}</h1>
        }

        <p className="w-[550px] text-lg/5">{heroMovie?.overview}</p>
      
      </div>

      {/* Fixed buttons */}
      <div className="absolute flex gap-3 top-[202px]">

        <button className="bg-white hover:bg-opacity-80 rounded-[4px] w-[125px] h-[47px] text-black text-lg flex items-center justify-center font-roboto font-medium gap-2">
          <FontAwesomeIcon icon={faPlay} className="text-[28px] -ml-3"/>
          Play
        </button>

        <button className="bg-white/25 hover:bg-white/20 rounded-[4px] w-[164px] h-[47px] text-white text-lg font-roboto font-medium flex items-center justify-center gap-2" onClick={handleMoreInfoClick}>
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
