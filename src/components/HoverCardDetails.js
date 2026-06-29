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
   
      <div className="w-full bg-[#181818] rounded-b-lg text-white p-6 flex flex-col gap-4">

        <div className='flex items-center justify-between relative w-full'>

          <div className="flex flex-row justify-between items-center gap-2">

            <div className="w-10 h-10 border-2 border-white bg-white rounded-full flex items-center justify-center">
               <FontAwesomeIcon icon={faPlay} className="text-lg text-black ml-1"/>
            </div>

            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>

            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faThumbsUp} className="text-lg ml-1"/>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center cursor-pointer" onClick={handleMoreInfoClick}>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
          </div>

        </div>

        <div className="flex items-center gap-2">

            <div className="flex items-center justify-center border border-white px-2">
                <h2 className="text-xl/tight">{movieDetail?.certification || "U"}</h2>
            </div>
            <div className="flex items-center justify-center">
                <h2 className="text-lg">{movieDetail?.duration}</h2>
            </div>
            <div className="flex items-center justify-center border border-white rounded-[4px] px-2">
                <h2 className="text-sm/tight">HD </h2>
            </div>

        </div>

        <div className="flex flex-wrap items-center">
          {movieDetail?.info?.genres.map((genre, index) =>
            <div className="flex items-center gap-2">
              {index !== 0 &&
              <FontAwesomeIcon icon={faCircle} className="text-[5px] text-gray-500 ml-2"/>}
              <h2 className="text-lg font-roboto">{genre.name}</h2>
            </div>
          )}   
        </div>

      </div>
    
  );
};

export default HoverCardDetails;
