import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const MovieBackground = ({movie_id}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo); //getting trailer from the store

  useMovieTrailer(movie_id);

  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerVideo?.key}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  );
};

export default MovieBackground;
