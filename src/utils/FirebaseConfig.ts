// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANGJ4IzvElNoN_16hQyKz_QS2MyfzRbU0",
  authDomain: "videochatapp-83576.firebaseapp.com",
  projectId: "videochatapp-83576",
  storageBucket: "videochatapp-83576.appspot.com",
  messagingSenderId: "4184721784",
  appId: "1:4184721784:web:5bd4e5e35ff79a84c4e08d",
  measurementId: "G-5G13GE5XN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);