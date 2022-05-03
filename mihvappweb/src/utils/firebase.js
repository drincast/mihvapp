// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const configFirebase = require("./configfirebase.json");

let cfgFB = {
    apiKey: configFirebase.apiKey,
    authDomain: configFirebase.authDomain,
    databaseURL: configFirebase.databaseURL,
    projectId: configFirebase.projectId,
    storageBucket: configFirebase.storageBucket,
    messagingSenderId: configFirebase.messagingSenderId
};

const app = initializeApp(cfgFB);

//const database = firebase.database();
//const storage = firebase.storage();
const storage = getDatabase(app);

// const platillos = database.ref('alimentos/');
// const bebidas = database.ref('bebidas/');
//const storageRef = storage.ref();

const data = {
    //storageRef
    storage
};

export default data;