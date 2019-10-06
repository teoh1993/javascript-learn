var Car = require('./cus_models/car.js');


let car = new Car(123);
console.log(car.id);
console.log(car.identify('----'));
console.log(car.start());
console.log(car.accessExtend());
car.id = 456;
console.log(car.id);
console.log(car.identify('!!!!'));
console.log(car.start());
console.log(car.accessExtend());
