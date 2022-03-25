import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDCIg3mVjG82rXYvX80zqFXRlnG9BBL9XA",
  authDomain: "letmeask-app-1a5cf.firebaseapp.com",
  databaseURL: "https://letmeask-app-1a5cf-default-rtdb.firebaseio.com",
  projectId: "letmeask-app-1a5cf",
  storageBucket: "letmeask-app-1a5cf.appspot.com",
  messagingSenderId: "1099257449195",
  appId: "1:1099257449195:web:2ac35c507f06bdc9284cae",
  measurementId: "G-9TBDCW46MP"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, database, auth };
