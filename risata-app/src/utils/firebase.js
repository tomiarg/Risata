// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbL8I2j7Akqe8czZm418rU_IvZ1JTq0d4",
  authDomain: "risata---app.firebaseapp.com",
  projectId: "risata---app",
  storageBucket: "risata---app.appspot.com",
  messagingSenderId: "245422617490",
  appId: "1:245422617490:web:fc276789d0bc5038da474b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);