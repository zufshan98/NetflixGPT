import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/2 h-1/6 bg-black grid grid-cols-12 rounded-full">
        <input type="text" className="col-span-9 bg-transparent p-4 m-4 text-lg rounded-3xl" placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className="bg-red-600 col-span-3 p-4 m-4 text-white text-xl font-semibold rounded-3xl">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
