import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  
  const searchText = useRef(null);

  //Search movie in TBDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to Gpt AI and get movie results

    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query :" + searchText.current.value + ". only give me names of 5 movies, coma separated like the example result given ahead. Example Result: Hera Pheri, Golmaal, Ye Jawaani Hai Deewani, Allah Hafiz, Train to Busan"; //Gpt is dumb, so in order to extract exact movie name, we have to write all these


    const gptResults = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });
    console.log(gptResults.choices[0]?.message?.content || " ");

    if(!gptResults) {
      //TO DO : Write Error Handling
    }
    //console.log(gptResults.text); 
    // op - Gol Maal, Chupke Chupke, Padosan, Angoor, Jaane Bhi Do Yaaro
    //const gptMovies = gptResults.text.split(","); //gives movie array
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    console.log(gptMovies);
    // op - ['Padosan', ' Chupke Chupke', ' Jaane Bhi Do Yaaro', ' Andaz Apna Apna', ' Angoor']

    //For each movie, I will search TMDB API
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    //This will return 5 promises instead of results, since it's making 5 API calls, so it'll take time since it's an async function
    // op - [Promise, Promise, Promise, Promise, Promise,]
    //Now, we have to resolve the promises to get the results
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults:  tmdbResults})); //store in the slice
  };

  

  return (
    <div className="pt-[10%] flex justify-center text-white">
      <form className="w-1/2 h-1/6 bg-black grid grid-cols-12 rounded-full" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className="col-span-9 bg-transparent p-4 m-4 text-lg rounded-3xl" placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className="bg-red-600 col-span-3 p-4 m-4  text-xl font-semibold rounded-full" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
