import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOk47z-_pml0gU9tkQOeUV-0mSlDGZ7Ks",
    authDomain: "todo-app-cv.firebaseapp.com",
    datbaseURL: "https://todo-app-cv.firebaseio.com",
    projectId: "todo-app-cv",
    storageBucket: "todo-app-cv.appspot.com",
    messagingSenderId: "925402355475",
    appId: "1:925402355475:web:c9e47c82e5c386e9caece6",
    measurementId: "G-H81QJKW58Q"
});

const db = firebaseApp.firestore();

export default db;