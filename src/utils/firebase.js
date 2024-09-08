// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq8bEeeaX_byiEm7JOIT-l7KS-exHyRUY",
  authDomain: "netflix-gpt-6f290.firebaseapp.com",
  projectId: "netflix-gpt-6f290",
  storageBucket: "netflix-gpt-6f290.appspot.com",
  messagingSenderId: "147704141340",
  appId: "1:147704141340:web:8e0c300d008e055f66b1d9",
  measurementId: "G-19NX4K2HJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics);

export const auth = getAuth();
