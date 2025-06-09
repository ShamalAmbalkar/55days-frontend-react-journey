var arr=[1,2,3,4,5];
for(var ele of arr){
    console.log(ele);
}
for(var ele in arr){
    console.log(ele);
}
var obj={
    fname:"Shamal",
    lname:"Ambalkar"
}
for(var val in obj){
    console.log(`${val}: ${obj[val]}`);
}