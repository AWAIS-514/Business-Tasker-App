

import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/database';
import 'firebase/storage';

 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBblH_39EIdzrIYN44Hr4PwxDZBoGcPVM",
  authDomain: "seohmcp.firebaseapp.com",
  projectId: "seohmcp",
  storageBucket: "seohmcp.appspot.com",
  messagingSenderId: "980475746619",
  appId: "1:980475746619:web:cb4ec422f6fa47cfd4ff1e",
  measurementId: "G-GWH3MPSW49"
};
 
  firebase.initializeApp(firebaseConfig);
  export default firebase;
  
