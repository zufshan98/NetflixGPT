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
    <div className="absolute z-10 left-6 sm:left-8 md:left-10 lg:left-14 xl:left-16 top-[60px] sm:top-[120px] md:top-[200px] lg:top-[250px] xl:top-[300px] w-[300px] lg:w-[350px] xl:w-[550px] text-white">

      {/* Logo + description area */}
      <div className="absolute -bottom-[94px] sm:-bottom-[109px] md:-bottom-[120px] lg:-bottom-[135px] xl:-bottom-[178px] flex flex-col gap-2 md:gap-6">
      
        {heroMovie 
          ? <img className="md:w-96 max-h-20 sm:max-h-[130px] md:max-h-44 lg:max-h-52 xl:max-h-60 object-contain object-left" src={IMG_CDN_URL + heroMovie?.images?.logos[0]?.file_path} alt="movie logo"/>
      
          : <h1 className="text-lg lg:text-5xl xl:text-8xl font-bold font-serif">{heroMovie?.title || heroMovie?.name}</h1>
        }

        <p className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[550px] text-[8px]/[1em] sm:text-[9px] md:text-xs/[1.2em] lg:text-base/[1.2em] xl:text-lg/5">{heroMovie?.overview}</p>
      
      </div>

      {/* Fixed buttons */}
      <div className="absolute flex gap-1 md:gap-3 top-[100px] sm:top-[120px] md:top-[133px] lg:top-[150px] xl:top-[202px]">

        <div className="bg-white hover:bg-opacity-80 rounded-[4px] w-[60px] sm:w-[75px] md:w-[96px] lg:w-[120px] xl:w-[125px] h-[21px] sm:h-[29px] md:h-[34px] lg:h-[44px] xl:h-[47px] text-black  flex items-center justify-center gap-1 md:gap-1.5">
          <FontAwesomeIcon icon={faPlay} className="text-[12px] sm:text-[17px] md:text-[20px] lg:text-[25px] xl:text-[28px]"/>
          <h4 className="font-roboto font-medium text-[9px] sm:text-xs md:text-sm lg:text-lg">Play</h4>
        </div>

        <div className="bg-white/25 hover:bg-white/20 rounded-[4px] w-[85px] sm:w-[105px] md:w-[130px] lg:w-[164px] h-[21px] sm:h-[29px] md:h-[34px] lg:h-[44px] xl:h-[47px] text-white flex items-center justify-center gap-1 md:gap-1.5" onClick={handleMoreInfoClick}>
          <span className="material-symbols-outlined text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            info
          </span>
          <h4 className="text-[9px] sm:text-xs md:text-sm lg:text-lg font-roboto font-medium ">More Info</h4>
        </div>

      </div>
    </div>
  );
};

export default MovieTitle;
