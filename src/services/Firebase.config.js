// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqo6bGP1sHxnmjzPIDYobwEKi2LfFcIzw",
  authDomain: "quantumnodespro.firebaseapp.com",
  projectId: "quantumnodespro",
  storageBucket: "quantumnodespro.appspot.com",
  messagingSenderId: "987439325936",
  appId: "1:987439325936:web:f16101c7546947c6205835",
  measurementId: "G-WGK4F7YL7G"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
export const auth=getAuth(app);