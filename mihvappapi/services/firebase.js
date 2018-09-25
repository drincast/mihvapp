var firebase = require('firebase');

let cfgFB = {
    apiKey: "AIzaSyC_ijNJZOAxb96RxBfa-ULGEBXcmUlY8NE",
    authDomain: "mihv-333.firebaseapp.com",
    databaseURL: "https://mihv-333.firebaseio.com",
    projectId: "mihv-333",
    storageBucket: "mihv-333.appspot.com",
    messagingSenderId: "127491763235"
  };

firebase.initializeApp(cfgFB);

const database = firebase.database();
const person = database.ref('person/p1');

const data = {
    person: person
}

module.exports = {
    data : data
} 
