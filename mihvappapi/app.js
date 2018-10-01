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

app.get('/getImgProfile/:id/:namefile', (req, res, next) => {
  let response = undefined;

  const id = req.params.id
  const namefile = req.params.namefile

  if (id !== undefined && id !== null){
    if(namefile !== undefined && namefile !== null){
      // firebase.data.storage.file('perfil00002.png').download({destination: 'C:/Users/ro5748/Desktop'}, (err) => {console.log(err)});

      // firebase.data.storage
      // .getFiles()
      // .then( res => {
      //   const files = res[0];

      //   console.log('files:');
      //   files.forEach(element => {
      //     console.log(file.name);
      //   });
      // })
      // .catch(err => console.log(err));

      // These options will allow temporary read access to the file
      const options = {
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60, // one hour
      };


      // firebase.data.storage
      // .file(`imgProfile/${id}/${namefile}`)
      // .getSignedUrl(options)
      // .then( res => {
      //   const url = res[0];

      //   console.log(`${namefile} = ${url}`);        
      // })
      // .catch(err => console.log(err));


      // Creates the new bucket
      // let bucketName = 'nuevonombre';
      // firebase.data.storage
      // .createBucket(bucketName)
      // .then(() => {
      //   console.log(`Bucket ${bucketName} created.`);
      // })
      // .catch(err => {
      //   console.error('ERROR:', err);
      // });

      //   firebase.data.storage
      //   .getBuckets()
      //   .then(results => {
      //     const buckets = results[0];

      //     console.log('Buckets:');
      //     buckets.forEach(bucket => {
      //     console.log(bucket.name);
      //   });
      // })
      // .catch(err => {
      //   console.error('ERROR:', err);
      // });
      // [END storage_list_buckets]

      // const imgFile = firebase.storage(`${id}/${namefile}`);
      // console.log(imgFile);
      res.status(200).send("Por implementar");
      return;
    }
    else{
      res.status(400 ).send("Error !!!, el parametro namefile esta vacio");
    }
  }
  else{
    res.status(400 ).send("Error !!!, el parametro id esta vacio");
  }

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


