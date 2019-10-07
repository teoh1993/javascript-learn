'user strict';

var cat = {
  name: 'Fluffy',
  color: 'White'
}

display(cat['color']);
console.log(typeof(cat));

let descriptors1 = Object.getOwnPropertyDescriptors(cat);
display(descriptors1.name);

Object.defineProperty(cat,'name',{writable:false});


let descriptors2 = Object.getOwnPropertyDescriptors(cat);
display(descriptors2.name);


cat.name = 'LOL';

display(cat);







var dog = {
  name: {fname:'wolf',last:'LOL'},
  color: 'Black'
}
console.log(typeof(dog));

let descriptors3 = Object.getOwnPropertyDescriptors(dog);
display(descriptors3.name);

Object.defineProperty(dog,'name',{writable:false});
// Object.freeze(dog.name);
dog.name.fname = 'LOL';

let descriptors4 = Object.getOwnPropertyDescriptors(dog);
display(descriptors4.name);

display(dog.name);
