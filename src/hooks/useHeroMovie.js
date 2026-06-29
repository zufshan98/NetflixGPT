import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addHeroMovie } from "../utils/moviesSlice";

const useHeroMovie = (movie_id, media_type) => {
   
    const dispatch = useDispatch();

    //console.log(movie_id);

    const getHeroMovie = async () => { 

        if(!movie_id) return;
        
        const data = await fetch(
            `https://api.themoviedb.org/3/${media_type}/${movie_id}?append_to_response=${
                media_type === "movie"
                ? "release_dates"
                : "content_ratings"
            }%2Cimages%2Cvideos%2Ccredits`,
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(movie_id,json);
        
        dispatch(addHeroMovie(json)); //add trailer to moviesSlice
    };

    useEffect(() => {
        getHeroMovie();
    }, []);
};

export default useHeroMovie;