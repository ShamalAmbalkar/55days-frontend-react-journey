console.log("Variables:");
var a=12;// var can redeclare, reassign, and variable hosting raised, declaration and assignment must not be in the same line
console.log(a);
let b=12; // let can reassign but cannot redeclare, and variable hosting not raised, declaration and assignment must not be in the same line
console.log(b);
const c=12; // const cannot reassign and cannot redeclare, and variable hosting not raised, declaration and assignment should be in the same line
console.log(c);

console.log("Data Types:");
var d=0b1010;
console.log(d);
var a=true;
console.log(a);
var a=1111111111111111111111111111111111n;
console.log(a);
var k;
console.log(k);
var n=null;
console.log(n);

console.log("Operators:");
console.log("Arithmetic Operators:")
console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
console.log(5+2+(5*4)-3);
console.log("Relational Operators:");
console.log(5>2);
console.log("Logical Operators:")
console.log((5>2)&&(6>1) && (7>1));