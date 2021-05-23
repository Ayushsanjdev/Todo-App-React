import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZc1Xg1J7RlXW2UQHaxkpvEbWiyofBSnY",
  authDomain: "todoapp-7485e.firebaseapp.com",
  projectId: "todoapp-7485e",
  storageBucket: "todoapp-7485e.appspot.com",
  messagingSenderId: "362993396298",
  appId: "1:362993396298:web:d09ef5406bf2e7d8d094b3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db};

export default firebaseConfig;