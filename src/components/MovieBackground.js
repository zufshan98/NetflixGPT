import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
//import useMovieBackdrop from "../hooks/useMovieBackdrop";


const MovieBackground = ({movie_id}) => {

  const heroMovie = useSelector(store => store.movies?.heroMovie); //getting trailer from the store

  //useMovieBackdrop(movie_id);
  if(!heroMovie) return;
  console.log(heroMovie?.videos?.results);

  return (
    <div className="h-screen w-screen overflow-hidden pointer-events-none bg-cover"
      style={{
        backgroundImage: `url(${IMG_CDN_URL + heroMovie?.images?.backdrops[10]?.file_path})`,
      }}
    >
      {movie_id === 1628123 && (
      <video
        src="https://occ-0-6245-3647.1.nflxso.net/so/soa4/078/2036964907553793024.mp4?v=1&e=1782287236&t=LCYcIGXpByssTLtiYBLnJg1ZfTs"
        className="absolute left-0 top-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      )}

      {movie_id === 1628116 && (
      <video
        src="https://occ-0-6245-3647.1.nflxso.net/so/soa3/768/2027156192297960705.mp4?v=1&e=1782288111&t=jLSCQ_kwUiRJsOmdwFZTxROpo3U"
        className="absolute left-0 top-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      )}

      {(movie_id !== 1628123 && movie_id !== 1628116) && (
        <iframe className="absolute left-0 top-0  w-[115vw] h-[115vh] -ml-[10vw] -mt-[3vw]" src={"https://www.youtube.com/embed/" + heroMovie?.videos?.results[0]?.key + "?&autoplay=1&mute=1&controls=0&vq=highres&modestbranding=1&fs=0&start=0&end=70&loop=1&playlist=" + heroMovie?.videos?.results[0]?.key}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      )}
    </div>
  );
};

export default MovieBackground;
