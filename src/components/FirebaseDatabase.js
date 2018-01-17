import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCaISZ8oGwG_fQPPLho_RTPfbJSp0FfszY",
    authDomain: "viewport-188409.firebaseapp.com",
    databaseURL: "https://viewport-188409.firebaseio.com",
    projectId: "viewport-188409",
    storageBucket: "viewport-188409.appspot.com",
    messagingSenderId: "1092169932515"
}

firebase.initializeApp(config);
const database = firebase.database();

export default database;