import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieLogo } from "../utils/moviesSlice";

const useMovieLogo = (movie_id) => {

    const dispatch = useDispatch();

    console.log(movie_id);

    //fetch movie logo && updating the store with image data
    const getMovieLogo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie_id + '/images?include_image_language=en-US', API_OPTIONS);
        const json = await data.json();
        //console.log(json.logos);
        
        //if there's multiple logos, take the 1st logo 
        const logo = json.logos[0]; 
        //console.log(logo);
        dispatch(addMovieLogo(logo)); //add trailer to moviesSlice
    };

    useEffect(() => {
        getMovieLogo();
    }, []);
};

export default useMovieLogo;