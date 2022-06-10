// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpSgQgVciQ2y9cMiuIcGy1PO2S4YLEZ4Q",
  authDomain: "login-react-firebase-16110.firebaseapp.com",
  projectId: "login-react-firebase-16110",
  storageBucket: "login-react-firebase-16110.appspot.com",
  messagingSenderId: "513241473705",
  appId: "1:513241473705:web:6214df4f314c5261c6ffb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

