// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7c770.firebaseapp.com",
  projectId: "mern-estate-7c770",
  storageBucket: "mern-estate-7c770.appspot.com",
  messagingSenderId: "275594487831",
  appId: "1:275594487831:web:6e3b71ba2365c11ac49452"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);