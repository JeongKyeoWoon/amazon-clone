import firebase from "firebase"; // npm i firebase | npm install firebase-tools -g

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9i2y-VQwE3KTrefyg-gFPO43bWSvKq6s",
    authDomain: "clone-391b6.firebaseapp.com",
    databaseURL: "https://clone-391b6.firebaseio.com", // databaseURL: "https://databaseName.firebaseio.com",
    projectId: "clone-391b6",
    storageBucket: "clone-391b6.appspot.com",
    messagingSenderId: "771040236014",
    appId: "1:771040236014:web:bf4a0b0f00317ea4c23eff",
    measurementId: "G-ZK688CV0T2"
});

const auth = firebase.auth();

/*
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9i2y-VQwE3KTrefyg-gFPO43bWSvKq6s",
    authDomain: "clone-391b6.firebaseapp.com",
    databaseURL: "https://clone-391b6.firebaseio.com", // databaseURL: "https://databaseName.firebaseio.com",
    projectId: "clone-391b6",
    storageBucket: "clone-391b6.appspot.com",
    messagingSenderId: "771040236014",
    appId: "1:771040236014:web:bf4a0b0f00317ea4c23eff",
    measurementId: "G-ZK688CV0T2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
*/
export { auth };
