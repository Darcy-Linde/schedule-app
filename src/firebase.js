import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1PpXLUfWxv1OFOXUTbfepP3m6wB-72hc",
  authDomain: "schedule-app-59f48.firebaseapp.com",
  databaseURL: "https://schedule-app-59f48.firebaseio.com",
  projectId: "schedule-app-59f48",
  storageBucket: "schedule-app-59f48.appspot.com",
  messagingSenderId: "873166960530",
  appId: "1:873166960530:web:3297459cb7db784962334b",
  measurementId: "G-KGREM464WW",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
