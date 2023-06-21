import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmMNtkxLi_-tiwLJgAywJYNM-u6dPF-Wo",
  authDomain: "auth-5d388.firebaseapp.com",
  projectId: "auth-5d388",
  storageBucket: "auth-5d388.appspot.com",
  messagingSenderId: "700264615182",
  appId: "1:700264615182:web:20694bf4d0dde351d2db5f",
  // measurementId: <YOURMEASUREMENTID>,
  // apiKey: "AIzaSyBmMNtkxLi_-tiwLJgAywJYNM-u6dPF-Wo",
  // authDomain: "auth-5d388.firebaseapp.com",
  // projectId: "auth-5d388",
  // storageBucket: "auth-5d388.appspot.com",
  // messagingSenderId: "700264615182",
  // appId: "1:700264615182:web:20694bf4d0dde351d2db5f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
