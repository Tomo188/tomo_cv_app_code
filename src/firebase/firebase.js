import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "e-clone-312e1.firebaseapp.com",
    projectId: "e-clone-312e1",
    storageBucket: "e-clone-312e1.appspot.com",
    messagingSenderId: "330008781428",
    appId: "1:330008781428:web:2e9132e19755c3a8116721",
    measurementId: "G-CKN3SQ9TNM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth };