import useHighlyRecommendedKoreanMovies from '../hooks/useHighlyRecommendedKoreanMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useOnTheAirTvSeries from '../hooks/useOnTheAirTvSeries';
import usePopularKdramas from '../hooks/usePopularKdramas';
import useRecentlyAddedKdramas from '../hooks/useRecentlyAddedKdramas';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Header from './Header';
import HeroMovieContainer from './HeroMovieContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  
  useHighlyRecommendedKoreanMovies();
  useRecentlyAddedKdramas();
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularKdramas();
  useOnTheAirTvSeries();

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <HeroMovieContainer />
      <SecondaryContainer />
      
    </div>
  );
};

export default Browse;
