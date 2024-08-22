// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/**
 * 
 * To whomever may read this, I replaced the credentials with placeholders.
 * You can get your own credentials from the Firebase Console.
 * This is only for security reasons, I intended this to be a public repository but
 * I wanted to integrate firebase and still keep my database private, nothing is stored on that's important
 * but I still want to keep it private for future projects.
 * This was only a learning project, I want to integrate firebase in the future so if you want to test this out
 * create a firestore database in the firebase console and replace the credentials with your own.
 */
const firebaseConfig = {
  apiKey: "INSERT YOUR CREDENTIALS",
  authDomain: "INSERT YOUR CREDENTIALS",
  projectId: "INSERT YOUR CREDENTIALS",
  storageBucket: "INSERT YOUR CREDENTIALS",
  messagingSenderId: "INSERT YOUR CREDENTIALS",
  appId: "INSERT YOUR CREDENTIALS",
  measurementId: "INSERT YOUR CREDENTIALS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };