// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-manor.firebaseapp.com",
  projectId: "mern-manor",
  storageBucket: "mern-manor.appspot.com",
  messagingSenderId: "585889634791",
  appId: "1:585889634791:web:8a6631db7d29da1be08542"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);