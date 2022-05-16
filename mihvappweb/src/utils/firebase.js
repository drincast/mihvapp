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
const storageRef = sref(storage, 'imgProfile');
const imgPerfil = sref(storageRef, 'p1/rd300x300.png');
const database = getDatabase(app);

// const platillos = database.ref('alimentos/');
// const bebidas = database.ref('bebidas/');
// const storageRef = storage.ref();

// const starCountRef = ref(storage, 'person/p1');
// onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//     updateStarCount(postElement, data);
// });

function getData(idPerson) {
    // return get(storage, path);
    const dbRef = ref(database);
    
    return get(child(dbRef, `person/${idPerson}`)).then((snapshot) => {
        let data = null;
        if (snapshot.exists()) {
            data = snapshot.val();
            // console.log('SI', data);
        } else {
            console.log("No data available");
        }

        return data;
    }).catch((error) => {
        console.error('error', error);
    });
}

function getImage(path) {
    return getDownloadURL(sref(storageRef, path)).then((url) => {
        //console.log('utils-firebasels', url);
        return url;
    });
}

function getImageProfile() {
    return getDownloadURL(imgPerfil).then((url) => {
        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        //     const blob = xhr.response;
        // };
        // xhr.open('GET', url);
        // xhr.send();

        //console.log('utils-firebasels', url);
        return url;
    })
    // return getDownloadURL(sref(storage, path)).then((url) => {
    //     console.log('url', url);

    //     // This can be downloaded directly:
    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = 'blob';
    //     xhr.onload = (event) => {
    //         const blob = xhr.response;
    //     };
    //     xhr.open('GET', url);
    //     xhr.send();

    //     return url;
    // })
}

const data = {
    // storageRef,
    imgPerfil,
    getData,
    getImage,
    getImageProfile,
    storage,
    storageRef,
};

export default data;