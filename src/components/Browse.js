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
import GptSearchContainer from './GptSearchContainer';


const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  useHighlyRecommendedKoreanMovies();
  useRecentlyAddedKdramas();
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularKdramas();
  useOnTheAirTvSeries();

  return (
    <div className='overflow-x-hidden'>
      <Header />
      {showGptSearch ? (
        <GptSearchContainer />
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
