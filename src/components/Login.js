import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  //const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    //console.log(email.current.value);
    //console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    SetErrorMessage(message);
    //console.log(message);
    if(message) return; //if there's an error msg, don't go further

    //Sign In and Sign Up Logic
    if(!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    else {
      //Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });

    }

  };

  return (
    <div className=''>
      <Header />

      <div className='relative h-screen'>
        <img className='absolute inset-0 h-full w-full object-cover'
         src='https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg' alt='login-bg'/>    
      </div>

      <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50'></div>

      <form onSubmit={(e) => e.preventDefault()} className='bg-black/70 absolute p-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 text-white rounded-lg '>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
        <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>)}

        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>

        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>

        <p className='text-red-500 font-bold'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className='py-4'>{isSignInForm ? "New to Netflix?" : "Already registered?"}<span className='font-bold cursor-pointer hover:underline' onClick={toggleForm}> {isSignInForm ? "Sign Up Now" : "Sign In Now"}</span></p>
      </form>
      
    </div>
  )
}

export default Login
