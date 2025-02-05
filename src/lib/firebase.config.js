// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZl8dugdWuDOV1q6Uoeu1DQMNaGrMhuE8",
  authDomain: "my-tasks-22df7.firebaseapp.com",
  projectId: "my-tasks-22df7",
  storageBucket: "my-tasks-22df7.firebasestorage.app",
  messagingSenderId: "602626024812",
  appId: "1:602626024812:web:fe7f2dbf2d6d466efc7f49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
