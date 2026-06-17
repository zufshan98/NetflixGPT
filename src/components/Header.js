import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGeminiSearchView } from '../utils/geminiSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate(); //hook to redirect to the browse page
  
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch);

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

  const handleGeminiSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGeminiSearchView());
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value); //gives the selected language
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className={`w-full absolute z-10 ${user ? 'pl-11' : 'pl-32'} py-3 bg-gradient-to-b from-black flex justify-between items-center`}>

      <img className={user ? 'w-32 h-12' : 'w-48 h-20'} 
      src={LOGO} alt='netflix-logo'/>

      

      {user && (
        <div className='flex items-center justify-center gap-8 px-16'>

          {showGeminiSearch && (
            <select className='font-sans bg-transparent text-white border border-black/70 rounded-md' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}   
            </select>
          )}

          <button className=' text-white rounded-lg font-sans hover:text-white/60' onClick={handleGeminiSearchClick}>{showGeminiSearch ? "Home" : "Gemini Search"}</button>

          <img className='w-9 rounded-lg' src={user?.photoURL} alt='usericon' />

          <button onClick={handleSignOut} className='px-2 py-1 bg-red-600 rounded-md text-white font-sans'>Sign Out</button>
        </div>
      )}

    </div>
    
  );
};

export default Header;
