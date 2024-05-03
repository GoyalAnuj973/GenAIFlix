// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiMzBDVgMxiDFLnnHQvpaVd55CgvDA4_4",
  authDomain: "genaiflix.firebaseapp.com",
  projectId: "genaiflix",
  storageBucket: "genaiflix.appspot.com",
  messagingSenderId: "69366564702",
  appId: "1:69366564702:web:03941a9429d5977959b1cf",
  measurementId: "G-8JL1JFW6D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
