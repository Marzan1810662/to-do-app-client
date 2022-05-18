// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmlI8ufQP8PF9ius9REGUDIUHebl7u4cw",
  authDomain: "todo-app-9fe25.firebaseapp.com",
  projectId: "todo-app-9fe25",
  storageBucket: "todo-app-9fe25.appspot.com",
  messagingSenderId: "447015625520",
  appId: "1:447015625520:web:6d2165b2368a5576725ef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default (auth);