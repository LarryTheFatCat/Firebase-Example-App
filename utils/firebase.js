// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "INSERT UR OWN INFO HERE",
  authDomain: "INSERT UR OWN INFO HERE",
  projectId: "INSERT UR OWN INFO HERE",
  storageBucket: "INSERT UR OWN INFO HERE",
  messagingSenderId: "INSERT UR OWN INFO HERE",
  appId: "INSERT UR OWN INFO HERE",
  measurementId: "INSERT UR OWN INFO HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };