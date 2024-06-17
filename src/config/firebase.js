// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTDx2KLyyIXurfd1kkNp69ERLsFEgwv08",
  authDomain: "nikeclone-2k24.firebaseapp.com",
  projectId: "nikeclone-2k24",
  storageBucket: "nikeclone-2k24.appspot.com",
  messagingSenderId: "650938157280",
  appId: "1:650938157280:web:2bee69cb6d25efa6be6885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);