import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import geminiai from "../utils/geminiai";

const GeminiSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGeminiSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to Gemini AI and get movie results

    const geminiQuery = "Act as a Movie recommendation system and suggest some movies for the query :" + searchText.current.value + ". only give me names of 5 movies, coma separated like the example result given ahead. Example Result: Hera Pheri, Golmaal, Ye Jawaani Hai Deewani, Allah Hafiz, Train to Busan"; //Gemini is dumb, so in order to extract exact movie name, we have to write all these

    /**const gptResults = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: gptQuery }],
    });
    console.log(gptResults.choices);
  };*/

  
    const geminiResults = await geminiai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: geminiQuery,
    });
    console.log(geminiResults.text);
  };

  return (
    <div className="pt-[15%] flex justify-center text-white">
      <form className="w-1/2 h-1/6 bg-black grid grid-cols-12 rounded-full" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className="col-span-9 bg-transparent p-4 m-4 text-lg rounded-3xl" placeholder={lang[langKey].geminiSearchPlaceholder}/>
        <button className="bg-red-600 col-span-3 p-4 m-4  text-xl font-semibold rounded-full" onClick={handleGeminiSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
