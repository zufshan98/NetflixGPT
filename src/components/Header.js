import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate(); //hook to redirect to the browse page
  
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value); //gives the selected language
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className={`w-full fixed z-50 ${user ? 'pl-4 md:pl-8 lg:pl-11' : 'pl-20 md:pl-28 lg:pl-32'} py-1 md:py-3 bg-gradient-to-b from-black flex justify-between items-center`}>

      <img className={user ? 'w-16 sm:w-20 md:w-32 h-6 sm:h-8 md:h-12' : 'w-32 md:w-40 lg:w-48 h-12 md:h-16 lg:h-20'} 
      src={LOGO} alt='netflix-logo'/>

      

      {user && (
        <div className='flex items-center justify-center gap-4 md:gap-8 px-6 md:px-16'>

          {showGptSearch && (
            <select className='font-sans bg-transparent text-white border border-black/70 rounded-md' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option className='bg-white text-black' key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}   
            </select>
          )}

          <button className=' text-white rounded-lg font-sans hover:text-white/60' onClick={handleGptSearchClick}>{showGptSearch ? "Home" : "Gpt Search"}</button>

          <div onClick={handleSignOut} className='flex items-center justify-center rounded-md text-white cursor-pointer'>
            <span class="material-symbols-outlined">
              logout
            </span>
          </div>

          <img className='w-8 md:w-9 rounded-[4px]' src={user?.photoURL} alt='usericon' />

        </div>
      )}

    </div>
    
  );
};

export default Header;
