'user strict';

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
