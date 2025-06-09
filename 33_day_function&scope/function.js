//sample fun without formal paramenter
function printHello(){
    console.log("Hello");
}
printHello();

//sample fun with formal parameter
function add(a,b){
    console.log(a+b);
}
add(3,6);

//sample fun with return statement
function printing(){
    return "Hiiii";
}
var k=printing();
console.log(k);

//ananomous function
let funtion1=function(){
    console.log("hi there!");
}
funtion1();

//arrow function
var funtion2=()=>{
    console.log("This is arrow funtion.")
}
funtion2();

/*Scope 
1.Block
2.functional
3.global 
*/