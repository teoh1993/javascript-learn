/// ############ function scope ############
 function startCar(carId){
   let message = 'Starting';
   let startFn = function turnKey(){
     let message = 'Override';
     console.log(message);
   }
   startFn();
   console.log(message);
 }

 startCar(123);

// ############ block scope ############
let message1 = 'Outside';
if (5===5) {
  let message1 = 'Equal';
  var message2 = 'Equal2';
  console.log(message1);
}
console.log(message1);
console.log(message2);

// ############ IIFE's ############
function lol(){
  console.log('in function');
}

(function(param){
  console.log('Immediately Invoked Function Expression');
  console.log(param);
})('print param');

let app = (function(){
  let carId = 123;
  console.log('app in function');
  return {};
})();

console.log(app);

// ############ closures ############
let app1 = (function(){
  let carId1 = 123;
  let getId = function(){
    return carId1;
  }
  return {
    getId : getId
  };
})();

console.log(app1.getId());
console.log(app1);

// ############ this keyword ############
console.log("\n")
let fn = function(){
  // console.log(this === window);
}

fn();


let o = {
  carId: 123,
  getId: function(prefix){
    console.log(this);
    return prefix + this.carId;
  }
};
console.log(o.getId());



// ############ call and apply ############
console.log("\n\n")

var a = {
  carId: 123,
  getId: function(){
    // console.log(this);
    return this.carId;
  }
};
let b = {
  carId: 123,
  getId: function(prefix,exp){
    console.log(this);
    return prefix + exp + this.carId;
  }
};

var carIIdx = {carId:456};

console.log(a.getId.call(carIIdx));
console.log(b.getId.apply(carIIdx,['ID:','is']) );
console.log(typeof(['ID:']));


// ############ bind ############
let c = {
  carId: 123,
  getId: function(){
    return this.carId;
  }
};
let carid11 = {carId:456};
let newFn = c.getId.bind(carid11);
console.log(newFn());


// ############ arrow Function ############
let getArrow = () => 123;
console.log(getArrow());

let getArrow1 = prefix => prefix+123;
console.log(getArrow1('ID:'));

let getArrow2 = (prefix,suffix) => prefix+123+suffix;
console.log(getArrow2('ID:','!!!'));

let getArrow3 = (prefix,suffix) => {
  return prefix+123+suffix
};
console.log(getArrow3('ID:','!!!'));

let getArrow4 = _ => 123;
console.log(getArrow4());

// ############ default parameter ############
let trackCar = function(carId,city='NY'){
  console.log(`Tracking ${carId} in ${city}`);
};
trackCar(123);
trackCar(123,'Chicago');
