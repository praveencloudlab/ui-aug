"use strict";
/*
   2 types
   ========
   1.primitive
   2.objects

   1.primitive
        a.number
        b.biginteger
        3.undefined
        4.string

    2. Objects
        a.arrays
        b.null




   
  
*/

// number
var a=100
a=87.43

// big integer
var i=8438468433n;

//undefined
var x;

//string
var s1='abc';
s1="Praveen";

// cancatination string => + 
var trainer='Praveen';
var subject='java script';
var msg='Trainer '+trainer+' is teaching '+subject;

// ES6 feature : back tick operator : for multiline string
var msg1=`Trainer ${trainer} is teaching ${subject}`
// concat function for immutable operations

//var msg2='Praveen';
//var s2='James';
//msg2=msg2+s2; // mutability

// string immutability ::: cancat function
//var msg3=msg2.concat(s2);

/*
    Notes
    =======
    1. in js window is top level object
    2. in node.js process is top level object
*/

//var name='Praveen';

//console.log("Hello");
//console.log(name);


// Objects

var nums=[10,20,"Abc"];
var config=null;

// Types of objects: 2 types
//1.object style
//2.literal style

var emp=new Object();
emp.id=10;
emp.name='Praveen'
emp.salary=939233

//2.literal style

// JSON :: Java script object notation
var student={
    "id":10,
    "name":'James',
    "age":21,
    "home address":"HYderabad",
    "marks":87
}
// mutability and immutability
/*

*/

//student.marks=9749374;


//Object.preventExtensions(student); // only prevents adding new props. but its mutable
//student.mobile=39744;
//Object.freeze(student); // immutable and prevents extensions
//Object.seal(student); //doent let add new properties. but can be mutable  
//student.name='Lalitha'
//student.mobile=39744;

// nested obejcts

var student={
    "id":10,
    "name":'Praveen',
    "address":{
        "id":100,
        "hno":1033,
        "street":'Stree1',
        "city":'Hyderabad',
        "pincode":436643
    },
    "age":23
}

























