// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGWJiZAmdIMHNfM1IWJ4Vhqp-dfQy4ygw",
  authDomain: "react-cursos-26288.firebaseapp.com",
  projectId: "react-cursos-26288",
  storageBucket: "react-cursos-26288.appspot.com",
  messagingSenderId: "848223749342",
  appId: "1:848223749342:web:9077984637fbb580606e4f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );