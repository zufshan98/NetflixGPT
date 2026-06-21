import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const useMovieBackdrop = (typeId, movie_id) => {

    const [ movieBackdropPath, setMovieBackdropPath ] = useState(null);

    //console.log(typeId, movie_id);

    //fetch movie moviebackdrop && update the store with image data
    const getMovieBackdrop = async () => { 

        if(!movie_id) return;

        const data = await fetch('https://api.themoviedb.org/3/'+ typeId +'/'+ movie_id + '/images?include_image_language=en-US', API_OPTIONS);
        const json = await data.json();
        //console.log(json);
        
        //if there's no backdrop image then use poster image 
        //console.log(backdrop.file_path);
        if(!json) return;     

        if (json.backdrops.length !== 0) {
            if (movie_id === 1628123)
                setMovieBackdropPath(json.backdrops[2].file_path);
            else
                setMovieBackdropPath(json.backdrops[0].file_path);
        } else if (json.posters.length !== 0) {
            setMovieBackdropPath(json.posters[0].file_path);
        } else setMovieBackdropPath(null);
        
    };

    useEffect(() => {
        getMovieBackdrop();
    }, []);

    return movieBackdropPath;
};

export default useMovieBackdrop;
