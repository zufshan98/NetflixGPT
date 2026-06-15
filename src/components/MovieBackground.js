import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";


const MovieBackground = ({movie_id}) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo); //getting trailer from the store

    const dispatch = useDispatch();

    //console.log(movie_id);

    //fetch trailer video
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie_id + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        
        //filtering out trailer from the list of videos fetched
        const filterData = json.results.filter(video => video.type === "Trailer");
        //if there's no trailer, take the 1st video & if there're 2 trailers, take the first one
        const trailer = filterData.length ? filterData[0] : json.results[0]; 
        console.log(trailer);
        dispatch(addTrailerVideo(trailer)); //add trailer to moviesSlice
    };

    useEffect(() => {
        getMovieVideos();
    }, []);

  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerVideo?.key}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  );
};

export default MovieBackground;
