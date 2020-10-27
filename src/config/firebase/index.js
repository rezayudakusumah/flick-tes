import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB61TG8bbG5OajLs-JnGJaJdqm0KvoUx6w",
    authDomain: "xyzpos-3bfdb.firebaseapp.com",
    databaseURL: "https://xyzpos-3bfdb.firebaseio.com",
    projectId: "xyzpos-3bfdb",
    storageBucket: "xyzpos-3bfdb.appspot.com",
    messagingSenderId: "492504848753",
    appId: "1:492504848753:web:6063b0ad43475792693ed0",
    measurementId: "G-V97F8CN1MS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;