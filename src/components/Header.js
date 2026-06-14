import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate(); //hook to redirect to the browse page
  
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName, photoURL} = user;
        //add user detail to the userSlice store
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div className='w-full absolute z-10 px-32 py-2 bg-gradient-to-b from-black flex justify-between items-center'>

      <img className='w-48 h-20' 
      src={LOGO} alt='netflix-logo'/>

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
