import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSimilarMovies } from "../utils/moviesSlice";

const useSimilarMovies = (movie_id, typeId) => {
    

    const dispatch = useDispatch();

    const similarMovies = useSelector(store => store.movies.similarMovies);


    //console.log(detail);
    

    //fetch movie logo && updating the store with image data
    const getSimilarMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/'+ typeId +'/' + movie_id +'/recommendations?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        //console.log(json);
        
        //if there's multiple logos, take the 1st logo 
        const movie = json.results?.slice(0, 10); 
        
        dispatch(addSimilarMovies(movie));
    };

    useEffect(() => {
        !similarMovies && getSimilarMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

};

export default useSimilarMovies;