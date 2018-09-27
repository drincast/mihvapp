
//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest( (req, res) => {
    const original = req.query.text; // Grab the text parameter.

    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.database().ref('/message').push({original: original}).then((snapshot) => {
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
        return res.redirect(303, snapshot.ref.toString());
    });
});

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      console.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });

//https://us-central1-MY_PROJECT.cloudfunctions.net/addMessage?text=uppercaseme

//https://us-central1-MY_PROJECT.cloudfunctions.net/addMessage?text=uppercasemetoo

//https://us-central1-mihv-333.cloudfunctions.net/addMessage?text=uppercasemetoo

exports.getPerson = functions.https.onRequest( (req, res) => {
    const id = req.query.id;

    if (req.method === 'PUT') {
        return res.status(403).send('Forbidden!');
    }

    const data = admin.database().ref(`/person/${id}`);

    let response = undefined;

    return data.once('value')
    .then( (snapshot) => {
        response = snapshot.val();
        return res.status(200).send(response.data);
    })
    .catch( err => {return res.status(500).send(err)});
});

//https://us-central1-mihv-333.cloudfunctions.net/getPerson?id=p1