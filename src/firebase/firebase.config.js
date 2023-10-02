// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfS3_4JpcPlWavTSdb98Nc4_305YBFD5o",
  authDomain: "user-email-password-auth-a35b6.firebaseapp.com",
  projectId: "user-email-password-auth-a35b6",
  storageBucket: "user-email-password-auth-a35b6.appspot.com",
  messagingSenderId: "572938201106",
  appId: "1:572938201106:web:5754eab307b9eac5c050cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth