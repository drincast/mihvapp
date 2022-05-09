// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";
import { getStorage, ref as sref, getDownloadURL} from "firebase/storage";

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
const storage = getStorage();
const storageRef = sref;
const database = getDatabase(app);

// const platillos = database.ref('alimentos/');
// const bebidas = database.ref('bebidas/');
// const storageRef = storage.ref();

console.log('firebase');
// const starCountRef = ref(storage, 'person/p1');
// onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//     updateStarCount(postElement, data);
// });

function getData(idPerson) {
    // return get(storage, path);
    const dbRef = ref(database);
    
    console.log(dbRef);
    console.log('peppo hierba');

    return get(child(dbRef, `person/${idPerson}`)).then((snapshot) => {
        let data = null;
        if (snapshot.exists()) {
            data = snapshot.val();
            console.log('SI', data);
        } else {
            console.log("No data available");
        }

        console.log('peppo hierba 2');
        return data;
    }).catch((error) => {
        console.error('error', error);
    });
}

//getData('p1');

function getImage(path) {
    return getDownloadURL(sref(storage, path)).then((url) => {
        console.log('url', url);

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        return url;
    })
}

const data = {
    // storageRef,
    getData,
    getImage,
    storage,
    storageRef,
};

export default data;