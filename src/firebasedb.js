import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/firebase-storage'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
    apiKey: "AIzaSyBawMARooEWIDar8ZVdUbIFgUlFog-AAPQ",
    authDomain: "softwaredeveloperoy.firebaseapp.com",
    databaseURL: "https://softwaredeveloperoy.firebaseio.com",
    projectId: "softwaredeveloperoy",
    storageBucket: "softwaredeveloperoy.appspot.com",
    messagingSenderId: "1083328160074",
    appId: "1:1083328160074:web:68a843ccb8ce8b99bb61b3"
   })

   export const dbStorage = db.storage();
   export const dbFirestore = db.firestore();
