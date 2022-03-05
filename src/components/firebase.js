// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF-doDpIGGubgD-DYQAxrx5Q9Slpc-HUg",
  authDomain: "dashboard-31891.firebaseapp.com",
  databaseURL: "https://dashboard-31891-default-rtdb.firebaseio.com",
  projectId: "dashboard-31891",
  storageBucket: "dashboard-31891.appspot.com",
  messagingSenderId: "1019639081570",
  appId: "1:1019639081570:web:1abc6768d107f8ac163f3b",
};

// Initialize Firebase
const firedb = firebase.initializeApp(firebaseConfig);
export default firedb.database().ref();
