import * as sapper from '@sapper/app';
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAf-m-vPpD4B8Tsg5LYOkmMhsX-PXik5A0",
  authDomain: "bryanmylee-sapper-app.firebaseapp.com",
  projectId: "bryanmylee-sapper-app",
  storageBucket: "bryanmylee-sapper-app.appspot.com",
  messagingSenderId: "1075897961157",
  appId: "1:1075897961157:web:95afbd80345300a1e2feac",
  measurementId: "G-KXLDXCTVK3"
};

firebase.initializeApp(firebaseConfig);

sapper.start({
  target: document.querySelector('#sapper')
});