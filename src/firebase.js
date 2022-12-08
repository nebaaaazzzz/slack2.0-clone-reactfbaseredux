// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNRrtmdYIMaCa-q3EnjpjZraEfEsRqbmk",
  authDomain: "slack2-clone-reactfbaseredux.firebaseapp.com",
  projectId: "slack2-clone-reactfbaseredux",
  storageBucket: "slack2-clone-reactfbaseredux.appspot.com",
  messagingSenderId: "88175091056",
  appId: "1:88175091056:web:addd296ca29c19ea0183b5",
  measurementId: "G-D5FVH77LHX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
