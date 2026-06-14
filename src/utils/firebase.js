// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuCw7r6NA2QjwJNc6RxxbiuwylIdsUEUU",
  authDomain: "netflixgpt-43795.firebaseapp.com",
  projectId: "netflixgpt-43795",
  storageBucket: "netflixgpt-43795.firebasestorage.app",
  messagingSenderId: "943543261363",
  appId: "1:943543261363:web:e0715524cae4a02b3938c6",
  measurementId: "G-2ST7GQ9ZZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); //for every authentication work, we need this, that's why we have kept it in central