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
// dog.name.fname = 'LOL';

let descriptors4 = Object.getOwnPropertyDescriptors(dog);
display(descriptors4.name);

display(dog.name);






Object.defineProperty(dog,'name',{configurable:false}) // cant configure after set to false
// Object.defineProperty(dog,'name',{enumerable:false}) // readable
// delete dog.name;

for (var propertyName in dog) {
  display(propertyName+' : '+dog[propertyName]);
}

display(Object.keys(dog));
display(JSON.stringify(dog));


Object.defineProperty(dog,'fullName',{
    get:function(){
      return this.name.fname+' '+this.name.last;
    },
    set:function(value){
      var nameParts = value.split(' ');
      this.name.fname = nameParts[0];
      this.name.last = nameParts[1];
    }
});
display(dog.fullName);


dog.fullName = 'Muffin Top';
display(dog.fullName);
display(dog.name.fname);
display(dog.name.last);
