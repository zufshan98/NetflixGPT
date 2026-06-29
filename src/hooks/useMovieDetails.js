import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (movie_id, typeId) => {

    const [details, setDetails] = useState(null); // to store certification, duration for similar movie card
   
    const dispatch = useDispatch();

    const showMoreInfo = useSelector(store => store.movies?.showMoreInfo);

    console.log(movie_id,typeId);

    const getMovieDetails = async () => { 

        if(!movie_id || !typeId) return;
        
        const data = await fetch(
            `https://api.themoviedb.org/3/${typeId}/${movie_id}?append_to_response=${
                typeId === "movie"
                ? "release_dates"
                : "content_ratings"
            }%2Cvideos%2Cimages%2Ccredits&language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(movie_id,json);
        
        //filtering out certification from the result
        const inRelease =
            typeId === "movie"
                ? json.release_dates?.results?.find(
                    country => country.iso_3166_1 === "IN"
                )
                : json.content_ratings?.results?.find(
                    country => country.iso_3166_1 === "IN"
                );

        console.log(inRelease);
        
        let certification, duration;

        if (typeId === "movie") {
            certification = inRelease?.release_dates?.[0]?.certification || "U";
            duration = Math.floor((json.runtime / 60)) + "h" + " " + (json.runtime%60) + "m" ;
        } else {
            certification = inRelease?.rating || "U";
        
        duration = json.number_of_seasons === 1 ? json.seasons[0].episode_count + " " + "Episodes" : json.number_of_seasons + " " + "Seasons";
        }
        
          
        dispatch(addMovieDetails({
            movie_id, 
            details: {
                certification: certification,
                duration: duration,
                credits: json.credits?.cast,
                info: json,
            },
        })) //add Details to moviesSlice

        {showMoreInfo.open &&
            setDetails({
                certification,
                duration,
            });
        }
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return details;
};

export default useMovieDetails;