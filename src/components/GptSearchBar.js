

const GptSearchBar = () => {
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input type="text" className="col-span-9 p-4 m-4 rounded-lg" placeholder="What would you like to watch today?"/>
        <button className="bg-red-600 col-span-3 p-4 m-4 text-white rounded-lg">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
