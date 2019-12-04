// creating config file for our firebase/firestore

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZvlf34Jlf1LJkDZ5Gz9OoJxNlzJieCK8",
  authDomain: "netninja-42ccd.firebaseapp.com",
  databaseURL: "https://netninja-42ccd.firebaseio.com",
  projectId: "netninja-42ccd",
  storageBucket: "netninja-42ccd.appspot.com",
  messagingSenderId: "273456476731",
  appId: "1:273456476731:web:a9233cefa423a28d90a21e",
  measurementId: "G-CP09FJTM6R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();

export default firebase;
