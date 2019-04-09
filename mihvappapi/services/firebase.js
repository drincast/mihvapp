const firebase = require('firebase');
const {Storage} = require('@google-cloud/storage');

const configFirebase = require('../utils/configfirebase.json');

const cfgFB = {
    apiKey: configFirebase.apiKey,
    authDomain: configFirebase.authDomain,
    databaseURL: configFirebase.databaseURL,
    projectId: configFirebase.projectId,
    storageBucket: configFirebase.storageBucket,
    messagingSenderId: configFirebase.messagingSenderId
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
