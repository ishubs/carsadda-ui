// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNf7oncK5A7gnjg3fBVFYo9R39xmpNxbc",
  authDomain: "carlelo17.firebaseapp.com",
  projectId: "carlelo17",
  storageBucket: "carlelo17.appspot.com",
  messagingSenderId: "268347230849",
  appId: "1:268347230849:web:603a0b50716260cb9ddb80",
  measurementId: "G-NY9X8KG15T"
};
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
export { auth, firebase };

