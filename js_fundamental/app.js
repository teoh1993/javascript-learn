const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();



// require('./lang.js');
// require('./operators.js');
// require('./func_scope.js');
// require('./obj_arr.js');
// require('./class_module.js');
// require('./prog_BOM_DOM.js');
require('./promises_errhandling.js');



app.get('/', function (req, res) {
  // res.send('Hello World');
  res.sendFile(path.join(__dirname+'/html/index.html'));
})




app.listen(3000);



// ################################################################################################
console.log("\n\n"+path.join(__dirname));



var start = new Date()
var simulateTime = 1000

setTimeout(function(argument) {
  // execution time simulated with setTimeout function
  var end = new Date() - start
  console.info('Execution time: %dms', end)
}, simulateTime)
