import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyBei8S42BTXj5lM5ZuRaN30HNdbQLCfSCc",
  authDomain: "constructionapplication-99b37.firebaseapp.com",
  projectId: "constructionapplication-99b37",
  storageBucket: "constructionapplication-99b37.appspot.com",
  messagingSenderId: "780942981412",
  appId: "1:780942981412:web:20268e4fe0d1b8d9bbdbb1",
  measurementId: "G-0CTW3YQ3QZ"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
