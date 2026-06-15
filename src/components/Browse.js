import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import HeroMovieContainer from './HeroMovieContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <HeroMovieContainer />
      <SecondaryContainer />
      {/**movies list x n */}
      {/**movie cards x n */}
    </div>
  );
};

export default Browse;
