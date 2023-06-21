// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: YOUR_API_KEY,
  // authDomain: YOUR_AUTHDOMAIN,
  // projectId: YOUR_PROJECTID,
  // storageBucket: YOUR_STORAGEBUCKET,
  // messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  // appId: YOUR_APPID
  apiKey: "AIzaSyBmMNtkxLi_-tiwLJgAywJYNM-u6dPF-Wo",
  authDomain: "auth-5d388.firebaseapp.com",
  // databaseURL: "https://auth-5d388-default-rtdb.firebaseio.com",
  projectId: "auth-5d388",
  storageBucket: "auth-5d388.appspot.com",
  messagingSenderId: "700264615182",
  appId: "1:700264615182:web:20694bf4d0dde351d2db5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
