// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC72nRKN5pnvrUdt6IYs78cIugO9Y-0tw",
    authDomain: "ema-john-orignal.firebaseapp.com",
    projectId: "ema-john-orignal",
    storageBucket: "ema-john-orignal.appspot.com",
    messagingSenderId: "418720805191",
    appId: "1:418720805191:web:3c2a90f386942d5c949c62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;