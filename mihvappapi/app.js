var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.listen(3000, () => {
  console.log('example app listening on port 3000');
});

app.use((req, res, next) => {
  res.status(404).send('Este recurso no existe !!!');
})
