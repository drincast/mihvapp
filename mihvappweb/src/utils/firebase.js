// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";

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

console.log('firebase');
// const starCountRef = ref(storage, 'person/p1');
// onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//     updateStarCount(postElement, data);
// });

function getData(idPerson) {
    // return get(storage, path);
    const dbRef = ref(storage);
    
    console.log(dbRef);

    get(child(dbRef, `person/${idPerson}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

getData('p1');

const data = {
    //storageRef
    storage
};

export default data;