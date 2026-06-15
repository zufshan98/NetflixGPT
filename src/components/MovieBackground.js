import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const MovieBackground = ({movie_id}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo); //getting trailer from the store

  useMovieTrailer(movie_id);

  return (
    <div className="w-screen h-screen overflow-hidden pointer-events-none">
      <iframe className="w-[125vw] h-[125vh] -ml-[13vw] " src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  );
};

export default MovieBackground;
