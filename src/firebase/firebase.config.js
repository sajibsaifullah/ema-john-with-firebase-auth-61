// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiOgPnV-MSZD3BvPRYS8eMlko2ru6xmS4",
  authDomain: "ema-john-with-firebase-a-b85f1.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-b85f1",
  storageBucket: "ema-john-with-firebase-a-b85f1.appspot.com",
  messagingSenderId: "575425941997",
  appId: "1:575425941997:web:9fd7e4940e7309fe17d7e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;