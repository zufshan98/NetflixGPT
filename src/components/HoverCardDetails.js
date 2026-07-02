import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setMoreInfoView } from "../utils/moviesSlice";

const HoverCardDetails = ({movie_id, typeId}) => {

  const movieDetail = useSelector(store => store.movies?.movieDetails[movie_id]); //getting details from the store

  const dispatch = useDispatch();

  //console.log(movieDetail.genres);

  const handleMoreInfoClick = () => {
    //Toggle GPT Search
    dispatch(
      setMoreInfoView({
        open: true,
        movie_id,
        typeId,
      })
    );
  }

  return (
   
      <div className="w-full bg-[#181818] rounded-b-md md:rounded-b-lg text-white p-6 flex flex-col gap-3.5 md:gap-4">

        <div className='flex items-center justify-between relative w-full'>

          <div className="flex flex-row justify-between items-center gap-2">

            <div className="w-6 md:w-10 h-6 md:h-10 bg-white rounded-full flex items-center justify-center">
               <FontAwesomeIcon icon={faPlay} className="text-sm md:text-lg text-black md:ml-1"/>
            </div>

            <div className="w-6 md:w-10 h-6 md:h-10 border-2 border-[#777] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-lg md:text-3xl">add</span>
            </div>

            <div className="w-6 md:w-10 h-6 md:h-10 border-2 border-[#777] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faThumbsUp} className="text-xs md:text-lg md:ml-1"/>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="w-6 md:w-10 h-6 md:h-10 border-2 border-[#777] rounded-full flex items-center justify-center cursor-pointer" onClick={handleMoreInfoClick}>
              <span className="material-symbols-outlined text-sm md:text-xl">keyboard_arrow_down</span>
            </div>
          </div>

        </div>

        <div className="flex items-center gap-2">

            <div className="flex items-center justify-center border border-[#777] px-2">
                <h2 className="text-base/tight md:text-xl/tight text-[#777] font-semibold">{movieDetail?.certification || "U"}</h2>
            </div>
            <div className="flex items-center justify-center">
                <h2 className="text-base md:text-lg text-[#777] font-semibold">{movieDetail?.duration}</h2>
            </div>
            <div className="flex items-center justify-center border border-[#777] rounded-[4px] px-1.5 md:px-2">
                <h2 className="text-[10px]/tight md:text-sm/tight">HD </h2>
            </div>

        </div>

        <div className="flex flex-wrap items-center">
          {movieDetail?.info?.genres.map((genre, index) =>
            <div className="flex items-center gap-1 md:gap-2">
              {index !== 0 &&
              <FontAwesomeIcon icon={faCircle} className="text-[3px] md:text-[5px] text-gray-500 ml-1  md:ml-2"/>}
              <h2 className="text-[17px] md:text-lg font-roboto">{genre.name}</h2>
            </div>
          )}   
        </div>

      </div>
    
  );
};

export default HoverCardDetails;
