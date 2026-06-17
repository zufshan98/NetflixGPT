import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearchContainer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/70 to-red-950 bg-red-900">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchContainer;
