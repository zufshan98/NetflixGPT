import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/"); //redirect to homepage
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  return (
    <div className='w-full absolute z-10 px-32 py-2 bg-gradient-to-b from-black flex justify-between items-center'>

      <img className='w-48 h-20' 
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/>

      {user && (
        <div className='flex items-center justify-center gap-3 px-10'>
          <img className='w-11 rounded-lg' src={user?.photoURL} alt='usericon' />
          <button onClick={handleSignOut} className='w-20 h-9 bg-red-600 rounded-md text-white font-bold'>Sign Out</button>
        </div>
      )}

    </div>
    
  );
};

export default Header;
