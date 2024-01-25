import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA_aqZ1mlE2RkNmB9LdKfR9A8PE0jJ2zMc",
  authDomain: "sign-up-in-7263e.firebaseapp.com",
  projectId: "sign-up-in-7263e",
  storageBucket: "sign-up-in-7263e.appspot.com",
  messagingSenderId: "82482106095",
  appId: "1:82482106095:web:0e56cc170f0a50d5d1d51a",
  measurementId: "G-ZWTSWQXBS3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth= getAuth(app);
export const googleProvider = new GoogleAuthProvider();
