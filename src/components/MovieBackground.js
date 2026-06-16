import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const MovieBackground = ({movie_id}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo); //getting trailer from the store

  useMovieTrailer(movie_id);

  return (
    <div className="h-screen w-screen overflow-hidden pointer-events-none">
      <iframe className="absolute left-0 top-0  w-[115vw] h-[115vh] -ml-[10vw] -mt-[3vw]" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&start=0&end=70&loop=1&playlist=" + trailerVideo?.key + "&vq=hd1080"}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  );
};

export default MovieBackground;
