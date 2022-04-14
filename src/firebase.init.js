// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCShFHsqKpBRmqReQ3T82qibX_awvGkiPw",
  authDomain: "geniun-car-services.firebaseapp.com",
  projectId: "geniun-car-services",
  storageBucket: "geniun-car-services.appspot.com",
  messagingSenderId: "1061475589771",
  appId: "1:1061475589771:web:a0ad7b48f7f231f9a73e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
