'use strict'; //throw error

display('Hello World');


var cat = {
  name:'fluffy',
  color:'white',
  speak: function(){display("Meeooow")}
}
cat.age = 3

display(cat.name);
display(cat.age);
cat.speak();





function Cat1(name, color ) {
 this.name = name
 this.color = color
}

var cat1 = new Cat1('Fluffy', 'White');
display(cat1);
console.log(typeof(cat1)); //object




var catObj = Object.create(Object.prototype,{
  name:{
    value:'Fluffy',
    enumerable:true,
    writable:true,
    configurable:true
  },
  color:{
    value:'White',
    enumerable:true,
    writable:true,
    configurable:true
  }
});
display(catObj);


// display(this);
// display(window);





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
