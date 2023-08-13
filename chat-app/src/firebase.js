// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI0G5cN_85O13wmCXvbUNHjj2swl41T3U",
  authDomain: "chat-app-ffe44.firebaseapp.com",
  projectId: "chat-app-ffe44",
  storageBucket: "chat-app-ffe44.appspot.com",
  messagingSenderId: "328916425803",
  appId: "1:328916425803:web:76943cf3a0c31a63dc01ce",
  measurementId: "G-BGQ5EJ3Y25"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
