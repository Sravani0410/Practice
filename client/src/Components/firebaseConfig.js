// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCeLXrJerEAFTdTiFfCk5YkodlE1Y1HRjo",
//   authDomain: "practice-f0bd9.firebaseapp.com",
//   projectId: "practice-f0bd9",
//   storageBucket: "practice-f0bd9.appspot.com",
//   messagingSenderId: "860861942254",
//   appId: "1:860861942254:web:7aa52ee02ca420a6e4e6ff",
//   measurementId: "G-81MC5KBVK8",
// };
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// Import the functions you  need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import '@firebase/firestore'
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCeLXrJerEAFTdTiFfCk5YkodlE1Y1HRjo",
  authDomain: "practice-f0bd9.firebaseapp.com",
  projectId: "practice-f0bd9",
  storageBucket: "practice-f0bd9.appspot.com",
  messagingSenderId: "860861942254",
  appId: "1:860861942254:web:7aa52ee02ca420a6e4e6ff",
  measurementId: "G-81MC5KBVK8",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { auth, db };
