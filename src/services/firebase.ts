import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCGF2uYEYcCWi_sUqc1lyC-Iuf7LnpgEcA",
  authDomain: "letmeask-c68d3.firebaseapp.com",
  databaseURL: "https://letmeask-c68d3-default-rtdb.firebaseio.com/",
  projectId: "letmeask-c68d3",
  storageBucket: "letmeask-c68d3.appspot.com",
  messagingSenderId: "365982288901",
  appId: "1:365982288901:web:721914cb91b5c4305f606c",
  measurementId: "G-VQY91C9S4V"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, database, auth };
