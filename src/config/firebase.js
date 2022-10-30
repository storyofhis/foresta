// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpYY1WG_8-Gms1zM8obg_Nt1WXr4Yvcmg",
  authDomain: "foresta-edf07.firebaseapp.com",
  projectId: "foresta-edf07",
  storageBucket: "foresta-edf07.appspot.com",
  messagingSenderId: "101316539370",
  appId: "1:101316539370:web:c10c6e6d0d363938e0f893",
  measurementId: "G-YWMR0EJEW4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
