// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtar5arAPMrS_9MELnQX3cSMvA0jNZq04",
  authDomain: "netflixgpt-6d29b.firebaseapp.com",
  projectId: "netflixgpt-6d29b",
  storageBucket: "netflixgpt-6d29b.appspot.com",
  messagingSenderId: "24048634865",
  appId: "1:24048634865:web:153a35fd76e01e441dd250",
  measurementId: "G-2HRETG5ZRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);