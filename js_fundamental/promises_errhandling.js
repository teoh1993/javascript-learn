// const Error = require('error');
/*
try {
  // let car = newCar;
  throw new Error('my custom error');
}
catch (error) {
  console.log('the error: ',error);
}
finally {
  console.log('this always run');
}
//*/

console.log('continuing...');


let Promise = require('promise');


let promise = new Promise(
  function (resolve, reject) {
    // console.log(resolve);
    // console.log(reject);
    // setTimeout(resolve,2000,'someValue');
    setTimeout(reject,2000,'someValue');
  }
);
promise.then(
  value => console.log('fullfilled : '+ value),
  error => console.log('rejected : '+error)
);
