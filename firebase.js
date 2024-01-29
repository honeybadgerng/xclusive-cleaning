// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWXWxvyP0unzlLvvgSSzSB4PCEo9TqP3M",
  authDomain: "xclusive-cleaning-app.firebaseapp.com",
  projectId: "xclusive-cleaning-app",
  storageBucket: "xclusive-cleaning-app.appspot.com",
  messagingSenderId: "409608302416",
  appId: "1:409608302416:web:138b56a21beff9f34d0655",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore;

export { auth, db };
