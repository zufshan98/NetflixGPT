import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieBackdrop from "../hooks/useMovieBackdrop";
import { IMG_CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const MovieInfoCard = ({movie_id, typeId}) => {

  //console.log(movie_id, typeId);
  const [showVideo, setShowVideo] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const movieDetail = useSelector(store => store.movies?.movieDetails[movie_id]); //getting details from the store
  const movieBackdrop = useSelector(store => store.movies?.movieBackdrop[movie_id]);
  
  //Whenever a new movie is hovered, start a 60-second timer that hides the trailer
  useEffect(() => {
    setShowVideo(true);
    setLoaded(false);

    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, [movie_id]);
  
  useMovieDetails(movie_id, typeId);

  if(!movieDetail || !movieBackdrop) return;
  //console.log(movieDetail.genres);
  return (
    
    <div className="my-5 relative z-80 -top-28 rounded-xl flex flex-col shadow-md shadow-black bg-red-800 bg-contain"
      style={{
        backgroundImage: `url(${IMG_CDN_URL + movieBackdrop})`,
      }}
    >

      {/**VIDEO PART*/}
      
      <div className="w-[350px] h-[195px]">
       {showVideo && movieDetail?.info?.videos?.results[0]?.key && (
          <iframe  
            onLoad={() => setLoaded(true)} 
            className={`w-full h-full rounded-t-xl pointer-events-none transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`} 
            src={"https://www.youtube.com/embed/" + movieDetail.info.videos.results[0]?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=1&fs=0&start=0&end=70&vq=hd1080"}  
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
          />
        )}
      </div>

      {/**DETAIL PART*/}
      <div className=" bg-[#141414] rounded-b-xl text-white p-6 flex flex-col gap-4">

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
            <h2 className="text-xl/tight">{movieDetail.certification}</h2>
          </div>
          <div className="flex items-center justify-center">
            <h2 className="text-lg">{movieDetail?.duration}</h2>
          </div>
          <div className="flex items-center justify-center border border-white rounded-md px-2">
            <h2 className="text-sm/tight">HD </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center">
          {movieDetail.info.genres.map((genre, index) => 
            <div className="flex items-center gap-2">
              {index !== 0 &&
              <FontAwesomeIcon icon={faCircle} className="text-[5px] text-gray-500 ml-2"/>}
              <h2 className="text-lg font-roboto">{genre.name}</h2>
            </div>
          )}   
        </div>
      </div>
    </div>
  );
};

export default MovieInfoCard;
