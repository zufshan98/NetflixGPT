import GeminiMovieSuggestions from "./GeminiMovieSuggestions";
import GeminiSearchBar from "./GeminiSearchBar";


const GeminiSearchContainer = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black bg-red-950">
      <GeminiSearchBar />
      <GeminiMovieSuggestions />
    </div>
  );
};

export default GeminiSearchContainer;
