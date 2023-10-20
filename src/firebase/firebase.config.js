// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA_26_6WbEZMZDbJPjFK1ZgJKkRqXIWKY",
  authDomain: "brand-shop-c5e2b.firebaseapp.com",
  projectId: "brand-shop-c5e2b",
  storageBucket: "brand-shop-c5e2b.appspot.com",
  messagingSenderId: "202219451047",
  appId: "1:202219451047:web:58627b147757a648d8e182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

