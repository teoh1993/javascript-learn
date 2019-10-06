// ########## window object ##########

year = 1956;

const Window = require('window');
const window = new Window();
console.log(window.innerWidth);

// ########## timers ##########
// setTimeout(function, milliseconds)
// ---- Executes a function, after waiting a specified number of milliseconds.
// ---- The clearTimeout() method stops the execution of the function specified in setTimeout().

// setInterval(function, milliseconds)
// ---- Same as setTimeout(), but repeats the execution of the function continuously.
// ---- The clearInterval() method stops the executions of the function specified in the setInterval() method.

let timeoutId = setTimeout(function(){
  console.log('1 sec passed');
}, 1000);
clearTimeout(timeoutId);

let intervalId = setInterval(function(){
  console.log('1 second passed');
},1000);
clearInterval(intervalId);


function testing(){
  console.log("run this cus every second");
}
let haha = setInterval(testing, 1000);
clearInterval(haha);
