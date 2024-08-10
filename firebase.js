// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQjhQZah0yqC_ciWWVJ2kJyD16ER5KKkM",
  authDomain: "inventory-management-4124e.firebaseapp.com",
  projectId: "inventory-management-4124e",
  storageBucket: "inventory-management-4124e.appspot.com",
  messagingSenderId: "741102275281",
  appId: "1:741102275281:web:be1b66da46252caa4693f0",
  measurementId: "G-H49WJPYLST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};