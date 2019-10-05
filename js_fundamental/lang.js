// ############ rest parameter ############
test('Mon',1,2,3,4);
function test(day, ...all){
  all.forEach(id => console.log(id));
}

// ############ destructuring arrays ############
let carIds = [1,2,5];
let [car1,car2,car3] = carIds;
console.log(car1,car2,car3);

let carr,remainCars;
[carr,...remainCars] = carIds;
console.log(carr,remainCars);


let remainCars2;
[, ...remainCars2] = carIds;
console.log(remainCars2);

let carIdd = [100,200,300];
let carr1,carr2,theRest;

[, carr2, ...theRest] = carIdd;
console.log(carr1,carr2,theRest);

// ############ destructuring object ############
let options = {title: "Menu",width: 100,height: 200};
let {title, width, height} = options;
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

let carObj = {id:5000, style:'convertible'};
let idx,stylex;
({id,style} = carObj);
console.log(id,style);

// ############ spread syntax ############
let arr = [100,300,500];
test1(...arr);
function test1(case1,case2,case3){
  console.log(case1,case2,case3);
}

let str = 'abc';
test2(...str);
function test2(str1,str2,str3){
  console.log(str1,str2,str3);
}

let arr3 = [1,2,3,4,5,6,7];
test3(...arr3);
function test3(case1,case2,case3, ...rest){
  console.log(rest);
};

// ############ typeof() ############
console.log(typeof(1));
console.log(typeof(true));
console.log(typeof('Hello'));
console.log(typeof(function(){}));
console.log(typeof({}));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN));

// ############ common type conversion ############
let foo = 'foo';
console.log(foo.toString());
console.log(Number.parseInt('55ABC'));
console.log(Number.parseFloat('55.99wer'));

// ############ controlling loops ############
let i=0;

for (; i < 12; i++) {
  if (i===8) {
    break;
  }
}
console.log(i);

for (let i = 0; i <4; i++) {
  if (i===2) {
    continue;
  }
  console.log(i);
}
