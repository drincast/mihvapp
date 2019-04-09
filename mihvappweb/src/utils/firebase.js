import * as firebase from 'firebase';

const configFirebase = require("./configfirebase.json");

let cfgFB = {
    apiKey: configFirebase.apiKey,
    authDomain: configFirebase.authDomain,
    databaseURL: configFirebase.databaseURL,
    projectId: configFirebase.projectId,
    storageBucket: configFirebase.storageBucket,
    messagingSenderId: configFirebase.messagingSenderId
};

firebase.initializeApp(cfgFB);

//const database = firebase.database();
const storage = firebase.storage();

// const platillos = database.ref('alimentos/');
// const bebidas = database.ref('bebidas/');
const storageRef = storage.ref();

const data = {
    storageRef
};

export default data;