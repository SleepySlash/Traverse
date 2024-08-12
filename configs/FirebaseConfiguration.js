// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAdKb_8Z3WJxzKpz7XjqnXYU_1QqNn6yY",
  authDomain: "traverse-ffb31.firebaseapp.com",
  projectId: "traverse-ffb31",
  storageBucket: "traverse-ffb31.appspot.com",
  messagingSenderId: "243032923190",
  appId: "1:243032923190:web:9217bcc041a61599018c97",
  measurementId: "G-6NFJRFNCD4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
