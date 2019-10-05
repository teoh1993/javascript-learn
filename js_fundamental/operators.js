/* #### equality
if (var1 == var2) {}
if (var1 === var2) {}
if (var1 != var2) {}
if (var1 !== var2) {}
//*/

console.log(1==true);
console.log(1===true);
let id = 123;
console.log(id=='123');
console.log(id==='123');
console.log(id!='123');
console.log(id!=='123');

/* #### unary
++var;
var++;
--var;
var--;
//*/
let year1 = year2 = year3 = year4 = '1967';
console.log(year1++);
console.log(++year2);
console.log(year3--);
console.log(--year4);

let year = "100";
console.log(typeof(-year));
console.log(-year);

/* logical
&&
||
&& > ||
!
*/

if (5===5 && 6===6) {
  console.log(true);
}else {
  console.log(false)
}

let setting1 = null;
let setting2 = {name:'Default'};
let setting3 = {name:'Joe'};
console.log(setting1||setting2);
console.log(setting3||setting2);
console.log(setting2&&setting3);

console.log(!true);
let car = null;
console.log(!car);

/* relational
>
<
>=
<=
*/

let s1 = 'Zoo';
let s2 = 'alphabet';

if (s1 <s2) {
  console.log(true);
} else {
  console.log(false);
}

if (s1.toUpperCase() < s2.toUpperCase()) {
  console.log(true);
} else {
  console.log(false);
}

/* conditional
= () ? : ;
*/

var result = (6 > 5) ? true : false;
console.log((6 > 5) ? true : false);
console.log(4 > 5 ? true : false);

/* assignment
+=
-=
/=
*=
%=
>>= shift bit
<<= shift bit
*/
let va1 = va2 = va3 = va4 = va5 = va6 = va7 = va8 =  1964;
va1 += 10;
va2 -= 10;
va3 /= 10;
va4 *= 10;
va5 %= 10;
va6 <<= 1;
va7 >>= 1;
va8 >>>= 1;

console.log('va1='+va1+' - '+'va2='+va2+' - '+'va3='+va3+' - '+'va4='+va4+' - '+'va5='+va5+' - '+'va6='+va6+' - '+'va7='+va7+' - '+'va8='+va8);

/* operator precedence
*/
