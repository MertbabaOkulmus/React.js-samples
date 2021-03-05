import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyACFPaUZST26qKJgcoJA7C5kA5peAxI2WQ",
    authDomain: "chatify-server.firebaseapp.com",
    projectId: "chatify-server",
    storageBucket: "chatify-server.appspot.com",
    messagingSenderId: "680331175909",
    appId: "1:680331175909:web:e742efa8ea1209a9f5310c",
    measurementId: "G-00GLQL98DE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;