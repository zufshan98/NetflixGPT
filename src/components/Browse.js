import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import HeroMovieContainer from './HeroMovieContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <HeroMovieContainer />
      <SecondaryContainer />
      
    </div>
  );
};

export default Browse;
