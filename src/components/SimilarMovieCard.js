import { useSelector } from "react-redux";
import useMovieBackdrop from "../hooks/useMovieBackdrop";
import { IMG_CDN_URL } from "../utils/constants";
import useMovieDetails from "../hooks/useMovieDetails";


const SimilarMovieCard = ({movie_id, typeId, release_date, image, posterPath, overview}) => {

  const similarMovieImage = useSelector(store => store.movies?.similarMovieImage[movie_id]);

  console.log(movie_id, typeId);

  useMovieBackdrop(typeId, movie_id, posterPath, true);
  const details = useMovieDetails(movie_id, typeId);
  console.log(details);

  return (
    <div className="flex flex-col w-[237px] h-[355px]">

        <div className="w-full h-[133px] relative">
            <img className="w-full h-full rounded-t-md" src={IMG_CDN_URL + (similarMovieImage ?? posterPath)} alt="movie poster"/>

            <div className="absolute right-0 top-0 h-12 w-24 bg-gradient-to-bl from-black via-black/60 to-black/10 blur-md">
            </div>

            <h2 className="absolute right-3 top-2 text-white">{details?.duration}</h2>
            
        </div>

        <div className="w-full h-[222px] flex flex-col p-4 bg-[#2f2f2f] text-[#bcbcbc] rounded-b-md">

            <div className="w-full flex items-center justify-between gap-2 mb-4">

                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center border border-[#bcbcbc] px-[.4em]">
                        <h2 className="text-[15px]/5">
                            {details?.certification || "U"}
                        </h2>
                    </div>

                    <div className="h-[17px] flex items-center justify-center border border-[#bcbcbc] rounded-[4px] px-[7px]">
                        <h2 className="text-xs/tight">HD </h2>
                    </div>

                    <h2 className="font-roboto">
                        {release_date?.slice(0, 4) || release_date?.slice(0, 4)}
                    </h2>
                </div>
                <div>
                    <div className="w-8 h-8 border-2 border-[#bcbcbc] rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl text-white">add</span>
                    </div>
                </div>
            
            </div>
            <div>
                <p className="text-[#d2d2d2] text-[15px]/4 line-clamp-6">{overview}</p>
            </div>
            
            
            
        </div>
        
        
    </div>
  );
};

export default SimilarMovieCard;
