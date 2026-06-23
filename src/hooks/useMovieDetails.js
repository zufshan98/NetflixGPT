import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (movie_id, typeId) => {
   
    const dispatch = useDispatch();

    //console.log(movie_id, typeId);

    const getMovieDetails = async () => { 

        if(!typeId) return;
        
        const data = await fetch(
            `https://api.themoviedb.org/3/${typeId}/${movie_id}?append_to_response=${
                typeId === "movie"
                ? "release_dates"
                : "content_ratings"
            }%2Cvideos&language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        console.log(movie_id,json);
        
        //filtering out Details from the list of videos fetched
        const inRelease =
            typeId === "movie"
                ? json.release_dates?.results?.find(
                    country => country.iso_3166_1 === "IN"
                )
                : json.content_ratings?.results?.find(
                    country => country.iso_3166_1 === "IN"
                );

        //console.log(inRelease);
        //if there's no Details, take the 1st video & if there're 2 Detailss, take the first one
        let certification, duration;

        if (typeId === "movie") {
        certification = !inRelease ? "U" : inRelease.release_dates[0].certification;
            duration = Math.floor((json.runtime / 60)) + "h" + " " + (json.runtime%60) + "m" ;
            //console.log(genres);
        } else {
        certification = !inRelease ? "U" : inRelease.rating;
        duration = json.number_of_seasons === 1 ? json.seasons[0].episode_count + " " + "Episodes" : json.number_of_seasons + " " + "Seasons";
            //console.log(genres);
        }
        
        dispatch(addMovieDetails({
            movie_id, 
            details: {
                certification: certification,
                duration: duration,
                info: json,
            },
        })); //add Details to moviesSlice
    };

    useEffect(() => {
        getMovieDetails();
    }, []);
};

export default useMovieDetails;