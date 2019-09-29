const express = require('express');
const app = express();

app.get('/', function (req, res) {
  console.log('1xxx1zz');

  res.send('Hello World');
})

app.listen(3000);
