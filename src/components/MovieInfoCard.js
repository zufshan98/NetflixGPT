import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieInfoCard = ({movie_id, typeId}) => {

  //console.log(movie_id, typeId);

  const trailerVideo = useSelector(store => store.movies?.trailerVideo[movie_id]); //getting trailer from the store
  
  useMovieTrailer(movie_id, typeId);
  
  return (
    
    <div className="my-5 relative w-[350px] h-[350px] -top-24 rounded-xl flex flex-col">

      {/**VIDEO PART*/}
      <div className="w-full h-1/2">
        <iframe className="w-full h-full rounded-t-xl" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=1&fs=0&start=0&end=70&loop=1&playlist=" + trailerVideo?.key + "&vq=hd1080"}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      </div>

      {/**DETAIL PART*/}
      <div className="w-full h-1/2 bg-[#141414] rounded-b-xl text-white p-4 flex flex-col gap-4">

        <div className="flex items-center justify-between">
          <div className="flex flex-row justify-between items-center gap-2">
            <div className="w-10 h-10 border border-white bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPlay} className="text-lg text-black ml-1"/>
            </div>
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faThumbsUp} className="text-lg ml-1"/>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center border border-white px-2">
            <h2 className="text-xl/tight">A</h2>
          </div>
          <div className="flex items-center justify-center">
            <h2 className="text-lg">1h 15m </h2>
          </div>
          <div className="flex items-center justify-center border border-white rounded-md px-2">
            <h2 className="text-sm/tight">HD </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h2 className="text-lg font-roboto">Genre</h2>
          <FontAwesomeIcon icon={faCircle} className="text-[5px] text-gray-500 "/>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoCard;
