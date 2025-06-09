var arr1=[20,40,60,80];
//direct way of printing array
console.log(arr1);
//for loop way of printing array
for (var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
//enhanced for loop way of printing array
for(var ele of arr1){
    console.log(ele);
}

// Predefined funtions:
var a=[1,2,3];
console.log(a);
var b=[6,5,9];
//1
a.push(4);
console.log(a);
//2
a.pop();
console.log(a);
//3
a.unshift(0);
console.log(a);
//4
a.shift();
console.log(a);
console.log(b);
//5
var c=a.concat(b);
console.log(c);
console.log(a);
console.log(b);
//6
b.sort();
console.log(b);
//7
a.reverse();
console.log(a);
//8
console.log(a.indexOf(3));
//9
console.log(a.lastIndexOf(1));
//10
var d=[1,2,3,4,5,6];
console.log(d);
d.splice(0,4,3,4);
console.log(d);
//min
console.log(Math.min(...a));
//max
console.log(Math.max(...d));

// Destructuring
var k=[10,20,30,40];
let [n,m,p,q]=k;
console.log(n);
console.log(m);
console.log(p);
console.log(q);


// Spread Operator (...)
var arr=[1,2,3,4];
let [elem1,elem2,...elem3]=arr;
console.log(elem1);
console.log(elem2);
console.log(elem3);

/*
push
pop
shift
unshift
concat
splice
sort
min
max
indexOf
LastIndexOf
reverse
slice
*/