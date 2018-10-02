import * as firebase from 'firebase';

let cfgFB = {
    apiKey: "AIzaSyC_ijNJZOAxb96RxBfa-ULGEBXcmUlY8NE",
    authDomain: "mihv-333.firebaseapp.com",
    databaseURL: "https://mihv-333.firebaseio.com",
    projectId: "mihv-333",
    storageBucket: "mihv-333.appspot.com",
    messagingSenderId: "127491763235"
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