import { useSelector } from 'react-redux';
import useHighlyRecommendedKoreanMovies from '../hooks/useHighlyRecommendedKoreanMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useOnTheAirTvSeries from '../hooks/useOnTheAirTvSeries';
import usePopularKdramas from '../hooks/usePopularKdramas';
import useRecentlyAddedKdramas from '../hooks/useRecentlyAddedKdramas';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Header from './Header';
import HeroMovieContainer from './HeroMovieContainer';
import SecondaryContainer from './SecondaryContainer';
import GeminiSearchContainer from './GeminiSearchContainer';


const Browse = () => {

  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch);
  
  useHighlyRecommendedKoreanMovies();
  useRecentlyAddedKdramas();
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularKdramas();
  useOnTheAirTvSeries();

  return (
    <div className='overflow-x-hidden'>
      <Header />
      {showGeminiSearch ? (
        <GeminiSearchContainer />
      ) : (
        <>
          <HeroMovieContainer />
          <SecondaryContainer />
        </>
      )}
      
    </div>
  );
};

export default Browse;
