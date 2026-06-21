import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movie_id, typeId) => {
   
    const dispatch = useDispatch();

    //console.log(movie_id, typeId);

    const getMovieVideos = async () => { 

        if(!typeId) return;
        
        const data = await fetch('https://api.themoviedb.org/3/'+ typeId +'/'+ movie_id + '/videos', API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        
        //filtering out trailer from the list of videos fetched
        //const filterData = json.results.filter(video => video.type === "Trailer");
        //if there's no trailer, take the 1st video & if there're 2 trailers, take the first one
        //const trailer = filterData.length ? filterData[2] : json.results[2];
        const trailer = json.results[0]; 
        //console.log(trailer);
        dispatch(addTrailerVideo({movie_id, trailer})); //add trailer to moviesSlice
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;