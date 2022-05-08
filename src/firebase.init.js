// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbqlTm54oI7V9DpFwxX6awt9ubUZwAsr8",
    authDomain: "bike-stock-assignment11.firebaseapp.com",
    projectId: "bike-stock-assignment11",
    storageBucket: "bike-stock-assignment11.appspot.com",
    messagingSenderId: "840018798437",
    appId: "1:840018798437:web:7b929b1b39ac71d7bae38c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;