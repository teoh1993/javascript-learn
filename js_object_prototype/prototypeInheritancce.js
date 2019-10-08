'user strict';
/*
var arr = ['red','blue','green'];

var lastView = arr[arr.length-1];
display('lastView='+lastView);


Object.defineProperty(Array.prototype,'last',{
  get:function(){
    return this[this.length-1];
  }
});
display(arr.last);

var arr2 = ['one','two','three'];
display(arr2.last);


var myFunction = function(){};
display(myFunction.prototype);

var cat = {name:'Fluffy'};
display(cat.prototype);
display(cat.__proto__);


// Function Prototype : A functon prototype is the object Instance that will
// become the prototype for all objects created using this function as a constructor.
//
// Object prototype : An object's prototype is the pbject Instance from which the object
// is inherited.



function Cat(name,color){
  this.name = name;
  this.color = color;
}
var fluffy = new Cat('Fluffy','White');
display(Cat.prototype); // function have prototype
display(fluffy.__proto__);
// both 41&42 are same Instance
display(Cat.prototype === fluffy.__proto__);

Cat.prototype.age = 3;
display(Cat.prototype); // function have prototype
display(fluffy.__proto__);

var muffin = new Cat('Muffin','Brown');
display(muffin.__proto__);



function Dog(name,color){
  this.name = name;
  this.color = color;
}
Dog.prototype.age = 3;
var dogA = new Dog('Fluffy','White');
var dogB = new Dog('Muffin','Brown');

dogA.age = 5;

display(dogA.age);
display(dogA.__proto__.age);
display(dogB.age);
display(dogB.__proto__.age);

display(Object.keys(dogA));
display(Object.keys(dogB));

display(dogA.hasOwnProperty('age'));
display(dogB.hasOwnProperty('age'));


Dog.prototype = {age:11};
var dogC = new Dog('Snowbell','blue');
display(dogA.age);
display(dogB.age);
display(dogC.age);
display(Dog.prototype.age);

display(dogC.__proto__);
display(dogC.__proto__.__proto__);
display(dogC.__proto__.__proto__.__proto__);

//*/

function Animal (voice) {
  this.voice = voice || 'wakaka';
}

Animal.prototype.eat = function () {
  display(this.voice);
}


function Monkey (name, energy, breed) {
  Animal.call(this,'Meow'); //*note
  this.name = name;
  this.energy = energy;
  this.breed = breed;
}

Monkey.prototype = Object.create(Animal.prototype)//*note
Monkey.prototype.constructor = Monkey;//*note
const charlie = new Monkey('Charlie', 10, 'Goldendoodle')
charlie.eat();
display(charlie);
display(charlie instanceof Monkey);
display(charlie instanceof Animal);
display(charlie.__proto__);
display(charlie.__proto__.__proto__);


class AnimalLOL {
  constructor(voice) {
    this.voice = voice || 'grunt';
  }
  speak(){
    display(this.voice);
  }
}

class MonkeyKing extends AnimalLOL{
  constructor(name, energy, breed) {
    super('superhyper Meow!!!');
    this.name = name;
    this.energy = energy;
    this.breed = breed;
  }
}

const charlieKing = new MonkeyKing('Charlie', 10, 'Goldendoodle');
charlieKing.speak();
display(charlieKing);
display(charlieKing.constructor);
display(Object.keys(charlieKing.__proto__.__proto__));
display(charlieKing.__proto__.__proto__.hasOwnProperty('speak'));
