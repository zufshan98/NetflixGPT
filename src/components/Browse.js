import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useOnTheAirTvSeries from '../hooks/useOnTheAirTvSeries';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Header from './Header';
import HeroMovieContainer from './HeroMovieContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
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
