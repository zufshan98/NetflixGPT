import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieBackdrop, addSimilarMovieImage } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieBackdrop = (typeId, movie_id, posterPath, enabled = false) => {

    const dispatch = useDispatch();

    const movieBackdrop = useSelector(store => store.movies.movieBackdrop?.[movie_id]);
    const showMoreInfo= useSelector(store => store.movies.showMoreInfo);

    //console.log(typeId, movie_id);

    //fetch movie moviebackdrop && update the store with image data
    const getMovieBackdrop = async () => { 

        
        if (!enabled || !typeId || !movie_id) return;

        if (movieBackdrop) return;

        try {
            const data = await fetch('https://api.themoviedb.org/3/'+ typeId +'/'+ movie_id + '/images?include_image_language=en-US', API_OPTIONS);

            if(!data.ok) return;

            const json = await data.json();
            //console.log(json);
        
            //if there's no backdrop image then use poster image 
            //console.log(movie_id, json.backdrops, json.posters);

            let imagePath;

            if (json?.backdrops?.length !== 0) {
                if (movie_id === 1628123)
                    imagePath = json?.backdrops[5].file_path;
                else if(movie_id === 1628116)
                    imagePath = json?.backdrops[2].file_path;
                else
                    imagePath = json?.backdrops?.[0]?.file_path;
            } else if (json?.posters.length !== 0) {
                imagePath = json?.posters?.[0]?.file_path;
            } else imagePath = posterPath;
            //console.log(imagePath);

            (!showMoreInfo.open) 
                ? dispatch(addMovieBackdrop({movie_id, images: imagePath}))
                : dispatch(addSimilarMovieImage({movie_id, image_path: imagePath}));

        } catch (error) {
            console.log("Backdrop fetch failed:", error);
        }
    };

    useEffect(() => {
        getMovieBackdrop();
    }, [typeId, movie_id, enabled]);

};

export default useMovieBackdrop;
