import firebase from 'firebase/firebase';

const DB_CONFIG = {
  apiKey: "AIzaSyCHHAUb0KM65A5n8f41u1dj-ZFc9ikye3k",
  authDomain: "global-web-application.firebaseapp.com",
  databaseURL: "https://global-web-application.firebaseio.com",
  projectId: "global-web-application",
  storageBucket: "global-web-application.appspot.com",
  messagingSenderId: "981707826176"
  };
 const fire = firebase.initializeApp(DB_CONFIG);

 export default fire;