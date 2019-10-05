// ############ constructor function - without prototype ############
function Car(id){
  this.carId = id;
  this.start = function(){
    console.log('start ' + this.carId);
  }
}

let car = new Car(123);
console.log(car.carId);
car.start();

function test(){
  console.log(this);
}
// test();

// ############ prototype ############
function Car1(id){
  this.carId = id;
}

Car1.prototype.start = function(){
  console.log('start: '+this.carId);
}

let carr = new Car1(123);
car.start();

// ############ expanding object using prototype ############
// String.prototype
String.prototype.hello = function(){
  return this.toString() + 'Hello';
}

console.log('foo '.hello());

// ############ JSON - JS Object Notation ############
