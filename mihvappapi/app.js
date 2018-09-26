const express = require('express');
const firebase = require('./services/firebase');

var app = express();

//convertir en json
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.type('application/json');
  res.send('hello world!');
});

app.get('/dataCVPerson', (req, res, next) => {
  let response = undefined;

  firebase.data.person.once('value')
  .then( (snapshot) => {
    response = snapshot.val();
    // snapshot.forEach(
    //   (childSnapshot) => {
    //     console.log(childSnapshot.key, childSnapshot.val());
    //   }      
    // );
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.type('application/json');
    res.send(response);
  })
  .catch( (err) =>{
    console.log(err);
    res.status(500).send("Error !!!, comunicarse con el administrador del servicio web");
  });
});

app.use((req, res, next) => {
  res.status(404).send('Este recurso no existe !!!');
});

//app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // res.header("Allow", "GET, POST, PUT, DELETE");
  // next();
//});

app.listen(3001, () => {
  console.log('example app listening on port 3001');
});


