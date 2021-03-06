import "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "manchester-city-10c4e.firebaseapp.com",
  databaseURL: "https://manchester-city-10c4e.firebaseio.com",
  projectId: "manchester-city-10c4e",
  storageBucket: "manchester-city-10c4e.appspot.com",
  messagingSenderId: "405762149182"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers
};
