const firebase = require('firebase');
const {Storage} = require('@google-cloud/storage');

const cfgFB = {
    apiKey: "AIzaSyC_ijNJZOAxb96RxBfa-ULGEBXcmUlY8NE",
    authDomain: "mihv-333.firebaseapp.com",
    databaseURL: "https://mihv-333.firebaseio.com",
    projectId: "mihv-333",
    storageBucket: "mihv-333.appspot.com",
    messagingSenderId: "127491763235"
};

const gcs = new Storage({
    projectId: "mihv-333",
});

//let myBucket = gcs.bucket('mihv-333.appspot.com');

firebase.initializeApp(cfgFB);

//console.log(myBucket);

const database = firebase.database();
const person = database.ref('person/p1');

// const storage = firebase.storage();
// const storegeRef = storage.ref();

const data = {
    person: person
    ,storage: gcs
}

module.exports = {
    data : data
} 
