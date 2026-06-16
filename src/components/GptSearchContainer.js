import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearchContainer = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black bg-red-950">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchContainer;
