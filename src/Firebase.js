import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAJ9Me524pjqNG9Hgv9Ysw1hoHcLuOuWjQ",
    authDomain: "react-spas-ca2d0.firebaseapp.com",
    databaseURL: "https://react-spas-ca2d0.firebaseio.com",
    projectId: "react-spas-ca2d0",
    storageBucket: "react-spas-ca2d0.appspot.com",
    messagingSenderId: "1003556650851"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;