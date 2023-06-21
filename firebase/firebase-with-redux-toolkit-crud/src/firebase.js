import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuRlgi7wKqxryJ7uLVraLyTQ9ymKTy_B8",
  authDomain: "auth-5d394.firebaseapp.com",
  projectId: "auth-5d394",
  storageBucket: "auth-5d394.appspot.com",
  messagingSenderId: "455712304430",
  appId: "1:455712304430:web:537dee8c45d975acc85ebf",
  measurementId: "G-FCR23DCZSV"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
