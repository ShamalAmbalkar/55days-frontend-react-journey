// Object Creation
var obj={
    fname:"Shamal",
    lname:"Ambalkar",
    age:21,
    class:"SYMSc[CA]",
    fullname: function() {
	return this.fname + " " + this.lname;
	}

}
console.log(obj);
console.log(obj.fullname);
console.log(obj.class);
console.log(obj.age);

delete obj.fname;
console.log(obj.fname);