import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieBackdrop } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieBackdrop = (typeId, movie_id, posterPath) => {

    const dispatch = useDispatch();

    //console.log(typeId, movie_id);

    //fetch movie moviebackdrop && update the store with image data
    const getMovieBackdrop = async () => { 

        if(!movie_id) return;

        const data = await fetch('https://api.themoviedb.org/3/'+ typeId +'/'+ movie_id + '/images?include_image_language=en-US', API_OPTIONS);
        const json = await data.json();
        //console.log(json);
        
        //if there's no backdrop image then use poster image 
        //console.log(backdrop.file_path);

        let imagePath;

        if (json?.backdrops?.length !== 0) {
            if (movie_id === 1628123)
                imagePath = json?.backdrops[4].file_path;
            else if(movie_id === 1628116)
                imagePath = json?.backdrops[2].file_path;
            else
                imagePath = json?.backdrops[0].file_path;
        } else if (json?.posters.length !== 0) {
            imagePath = json?.posters[0].file_path;
        } else imagePath = posterPath;
        
        dispatch(addMovieBackdrop({movie_id, images: imagePath}));
    };

    useEffect(() => {
        getMovieBackdrop();
    }, []);

};

export default useMovieBackdrop;
