import { useSelector } from "react-redux";

const MovieDetails = ({movie_id, typeId}) => {

  const movieDetail = useSelector(store => store.movies?.movieDetails[movie_id]); //getting details from the store


  if(!movieDetail) return null;
  //console.log(movieDetail.genres);

  return (
   
      <div className="w-full bg-[#181818] rounded-b-lg text-white p-6 flex flex-col gap-4">

        <div className="flex flex-row justify-between px-6 -my-2">

            <div className="w-[68%]">
                <div className="flex items-center gap-2 text-[15px]">
                    
                    <h2 className="font-roboto text-[#bcbcbc]">
                        {movieDetail.info.release_date?.slice(0, 4) || movieDetail.info.first_air_date?.slice(0, 4)}
                    </h2>
                
                    <h2 className="text-[#bcbcbc]">
                        {movieDetail?.duration}
                    </h2>
            
                    <div className="flex items-center justify-center border border-white rounded-[4px] px-[7px]">
                        <h2 className="text-xs/tight">HD </h2>
                    </div>

                </div>

                <div className="flex items-center gap-2">

                    <div className="flex items-center justify-center border border-white px-[.4em]">
                        <h2 className="text-[15px]/5">
                            {movieDetail.certification}
                        </h2>
                    </div>
                    
                    <h2 className="flex flex-wrap items-center lowercase">
                    {movieDetail.info?.genres.map(genre => genre.name).join(", ")}   
                </h2>
                </div>

                <div className="mt-7 mr-8 text-[16px]">
                    <p>{movieDetail.info?.overview}</p>
                </div>
            </div>
            <div className="w-[32%] text-[16px] flex  flex-col gap-3">

                
                <h2 className="line-clamp-2"><span className="text-[#777]">Cast: </span>{movieDetail?.credits?.map(cast => cast.name).join(", ")}</h2>

                <h2><span className="text-[#777]">Genres: </span>{movieDetail.info?.genres.map(genre => genre.name).join(", ")}</h2>

                <h2><span className="text-[#777]">This Show Is: </span>Exciting</h2>
                
            </div>
          </div>

      </div>
    
  );
};

export default MovieDetails;
