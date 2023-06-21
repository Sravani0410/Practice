// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: <YOURAPIKEY>,
//   authDomain: <YOURAUTHDOAMIN>,
//   projectId: <YOURPROJECTID>,
//   storageBucket: <YOURSTORAGEBUCKET>,
//   messagingSenderId: <YOURMESSAGINGSENDERID>,
//   appId: <YOURAPPID>,
//   measurementId: <YOURMEASUREMENTID>,
// };

// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2ZY6Kr4zqcseDqmoyYM0M1-DVFU2Tvng",
  authDomain: "crud1-a5aa6.firebaseapp.com",
  projectId: "crud1-a5aa6",
  storageBucket: "crud1-a5aa6.appspot.com",
  messagingSenderId: "479102160804",
  appId: "1:479102160804:web:564220cc8f4b11a9cf3b31",
  measurementId: "G-YSG0KDKGBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);