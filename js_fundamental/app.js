const express = require('express');
const app = express();


app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(3000);


// require('./lang.js');
// require('./operators.js');
// require('./func_scope.js');
// require('./obj_arr.js');
require('./class_module.js');
