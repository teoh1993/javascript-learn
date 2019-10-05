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
let text1 = {
  id : 123,
  style : 'convertible'
};
let text2 = [
  {carId:123,color:'red'},
  {carId:456,color:'blue'}
];
console.log(text1);
console.log(JSON.stringify(text1));
console.log(JSON.stringify(text2));

let jsonIn =
`
[
  {"carId":123,"color":"red"},
  {"carId":456,"color":"blue"}
]
`;
let json = JSON.parse(jsonIn);
console.log(json);

// ############ array iteration ############
let arr = [
  {carId:233,color:'white'},
  {carId:123,color:'red'},
  {carId:456,color:'blue'},
  {carId:789,color:'pink'}
];
arr.forEach(car => console.log(car));
arr.forEach((car,index) => console.log(car,index));

let blue = arr.filter(
  car => car.color === 'blue'
);
console.log(blue);

let res = arr.every(
  car => car.carId > 400
);
console.log(res);

let res1 = arr.find(
  car => car.carId > 100
);
console.log(res1);
