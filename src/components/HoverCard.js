
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";
import HoverCardDetails from "./HoverCardDetails";
import MovieVideo from "./MovieVideo";
import { IMG_CDN_URL } from "../utils/constants";

const HoverCard = ({movie_id, typeId}) => {

  console.log(movie_id, typeId);
  
  useMovieDetails(movie_id, typeId);

  //console.log(movieDetail.genres);
  return (
    
    <div className="w-[330px] md:w-[350px] my-5 relative z-80 -top-28 rounded-lg flex flex-col shadow-md shadow-black">

      {/**VIDEO PART*/}
      <MovieVideo movie_id={movie_id} typeId={typeId}/>

      {/**DETAIL PART*/}
      <HoverCardDetails movie_id={movie_id} typeId={typeId}/>
      
    </div>
  );
};

export default HoverCard;
