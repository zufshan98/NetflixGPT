

const MovieTitle = ({title, overview}) => {
  return (
    <div className="absolute p-16 pt-72 flex flex-col gap-5 text-white">
      <h1 className="text-8xl font-bold font-serif">{title}</h1>
      <p className="w-5/12 text-lg">{overview}</p>

      <div className=" flex gap-3">
        <button className="bg-white hover:bg-opacity-80 rounded-[4px] w-32 h-11 text-black text-lg font-bold">▸ Play</button>
        <button className="bg-white/25 hover:bg-white/20 rounded-[4px] w-40 h-11 text-white text-lg font-bold">⨀ More Info</button>
      </div>
    </div>
  );
};

export default MovieTitle;
