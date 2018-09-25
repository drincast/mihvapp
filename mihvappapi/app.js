const express = require('express');
const firebase = require('./services/firebase');

var app = express();

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/dataPerson', (req, res) => {
  let response = undefined;

  firebase.data.person.once('value')
  .then( (snapshot) => {
    response = snapshot.val();
    // snapshot.forEach(
    //   (childSnapshot) => {
    //     console.log(childSnapshot.key, childSnapshot.val());
    //   }      
    // );

    res.send(response);
  })
  .catch( (err) =>{
    console.log(err);
    res.status(500).send("Error !!!, comunicarse con el administrador del servicio web");
  });

  console.log('response', response);
});

app.listen(3000, () => {
  console.log('example app listening on port 3000');
});

app.use((req, res, next) => {
  res.status(404).send('Este recurso no existe !!!');
});
