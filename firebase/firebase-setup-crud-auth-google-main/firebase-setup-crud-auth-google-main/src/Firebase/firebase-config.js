// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyBIJVcCg30FToaK2qkoamqRg7GMrsJ6baU",
  // authDomain: "yt-firebase-setup.firebaseapp.com",
  // projectId: "yt-firebase-setup",
  // storageBucket: "yt-firebase-setup.appspot.com",
  // messagingSenderId: "283257567212",
  // appId: "1:283257567212:web:772f30edbb6218bb47f2c9"
  apiKey: "AIzaSyCGUKVoaM5wl83yXpNWICvUm84l7OmsdK4",
  authDomain: "fir-crud-d2af8.firebaseapp.com",
  projectId: "fir-crud-d2af8",
  storageBucket: "fir-crud-d2af8.appspot.com",
  messagingSenderId: "147099937681",
  appId: "1:147099937681:web:2a8e274800fcbf7d95c830",
  // measurementId: "G-P0KSJVVRH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
