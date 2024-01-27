// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHa0NEP7JUlCjq_1ENNGmB1typTxikXZQ",
  authDomain: "degrees-75d2f.firebaseapp.com",
  projectId: "degrees-75d2f",
  storageBucket: "degrees-75d2f.appspot.com",
  messagingSenderId: "336669785109",
  appId: "1:336669785109:web:13f2faa3bf4f65449e621c",
  measurementId: "G-FP6QEGW5X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
