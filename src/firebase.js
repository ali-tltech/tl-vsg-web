// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRyGUxAoe-aD3xXj7q94l1GJznN0ZLtuQ",
  authDomain: "vsgenx-daa64.firebaseapp.com",
  projectId: "vsgenx-daa64",
  storageBucket: "vsgenx-daa64.firebasestorage.app",
  messagingSenderId: "422747254532",
  appId: "1:422747254532:web:26be6325b33cd28424ea51",
  measurementId: "G-EE0Z68NS5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);