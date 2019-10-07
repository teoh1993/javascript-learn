'use strict'; //throw error

var cat = {
  name:'fluffy',
  color:'white',
  speak: function(){display("Meeooow")}
}
cat.age = 3

display(cat.name);
display(cat.age);
cat.speak();





//function Cat(name, color ) {
//  this.name = name
//  this.color = color
//}

//var cat = new Cat('Fluffy', 'White');

display('Hello World');

class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  speak() {
    display('Meeooow')
  }
}

var cat = new Cat('Fluffy', 'White')

display(cat)
cat.speak()
