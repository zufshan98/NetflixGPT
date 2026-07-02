import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";
import { IMG_CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const MovieVideo = ({movie_id, typeId}) => {
  //console.log(movie_id, typeId);

  const [showVideo, setShowVideo] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const movieDetail = useSelector(store => store.movies?.movieDetails[movie_id]); //getting details from the store
  const movieBackdrop = useSelector(store => store.movies?.movieBackdrop[movie_id]);
  const showMoreInfo = useSelector(store => store.movies?.showMoreInfo);
  //console.log(showMoreInfo);

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
  //console.log(movieDetail.genres);

  return (
    <div className={`${showMoreInfo.open ? 'h-[260px] md:h-[400px] lg:h-[480px]' : 'h-[195px]'} w-full bg-cover rounded-t-md md:rounded-t-lg relative`}
        style={{
        backgroundImage: `url(${IMG_CDN_URL + movieBackdrop})`,
      }}
    > 

      <div className="w-full h-[100%] inset-x-0 -bottom-4 absolute bg-gradient-to-t from-[#181818] to-transparent">
      </div>

      <div className={`w-[30%] absolute ${showMoreInfo.open ? 'bottom-[35%] md:bottom-[28%] left-14' :'bottom-[10%] left-5'}`}>
        {!movieDetail?.info?.images?.logos?.[0]?.file_path
          ? <h2 className="text-white text-lg font-serif">{movieDetail?.info?.name || movieDetail?.info?.title}</h2> 
          : <img className="w-ful" alt="logo" src={IMG_CDN_URL + movieDetail?.info?.images?.logos?.[0]?.file_path}/>
        }
      </div>

       <div className={`w-6 md:w-10 h-6 md:h-10 flex items-center justify-center border border-[#777] rounded-full cursor-pointer absolute ${showMoreInfo.open ? 'top-[70%] md:top-[79.8%] right-10' : 'top-[74.8%] right-8'} bg-black-500/80`}>
          <span className="material-symbols-outlined text-[#777] text-xl md:text-4xl">no_sound</span>
        </div>
      
      {showMoreInfo.open && (
        <div className= 'flex items-center justify-between absolute top-[70%] md:top-[79.8%] left-14 right-14'>

            <div className="flex flex-row justify-between items-center gap-2">

              <button className="bg-white hover:bg-opacity-80 rounded-[4px] w-[90px] md:w-[125px] h-[20px] md:h-[30px] lg:h-[47px] text-black text-lg flex items-center justify-center font-roboto font-medium gap-2">
                <FontAwesomeIcon icon={faPlay} className="text-[14px] md:text-[20px] lg:text-[28px] -ml-3"/>
                  <span className="font-roboto font-medium text-[10px] sm:text-xs md:text-sm lg:text-lg">Play</span>
              </button>

              <div className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 border-2 border-[#777] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-lg md:text-2xl lg:text-3xl text-white">add</span>
              </div>

              <div className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 border-2 border-[#777] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faThumbsUp} className="text-xs md:text-base lg:text-lg md:ml-1 text-white"/>
              </div>
            </div>

        </div>
      
      )}
      
       {showVideo && movieDetail?.info?.videos?.results[0]?.key && (
          <iframe  
            onLoad={() => setLoaded(true)} 
            className={`w-full h-full rounded-t-lg pointer-events-none transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`} 
            src={"https://www.youtube.com/embed/" + movieDetail.info.videos.results[0]?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=1&fs=0&start=0&end=70&vq=hd1080"}  
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
          />
        )}
      
    </div>
  );
};

export default MovieVideo;
