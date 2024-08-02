// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2q0a21kevY5faANb2D-auTH9aYj_Mkyo",
  authDomain: "pantryapp-30d59.firebaseapp.com",
  projectId: "pantryapp-30d59",
  storageBucket: "pantryapp-30d59.appspot.com",
  messagingSenderId: "297862610381",
  appId: "1:297862610381:web:9b10b4c88a2d080c7e1884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };