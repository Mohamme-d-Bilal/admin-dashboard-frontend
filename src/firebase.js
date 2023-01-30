// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWZyUNXGI0Bj0nGu-F4wcztQcl9alLecU",
  authDomain: "anpr-warden-app.firebaseapp.com",
  projectId: "anpr-warden-app",
  storageBucket: "anpr-warden-app.appspot.com",
  messagingSenderId: "169821197052",
  appId: "1:169821197052:web:ae67b10539a7871266fd79",
  measurementId: "G-38DMV8HVJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);