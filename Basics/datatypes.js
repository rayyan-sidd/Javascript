"use strict"; // for engine to treat all js code as newer version of js.(It is turned on by default)

//alert(3 + 3)
//not functional in node js (Browser compatible)

console.log(3
    +
    3)/*works but prioritize coded readability:
    console.log(3+3)*/


Object //object

console.log(typeof "Rayyan"); //'typeof' is used to find the type of a dataype. for eg: "Rayyan" is a string.

console.log(typeof null); //object
console.log(typeof undefined); //undefined


//------------Summary-------------

//Primitve datatypes: (7types)
String //string
Number // Number
Boolean // boolean
null //object
undefined //undefined
Symbol // Symbol (used to make any value unique).for eg:
const id = Symbol('2231')
const id1 = Symbol('2231')
console.log( id === id1); // false. (though they have similar values still using 'symbol' datatype they are unique and thus are not equal)


BigInt
const bigNumber = 39748374784728743n


//Reference datatypes (Non Primitive)
//'typeof' will suggest them as 'objects'
Array
const heroes = ["ironman", "spiderman", "shaktiman"]

Object
let myObj = {
    name: "rayyan",
    age: 10, //comma is important and anything inside the curly braces is object.
}


Function
const myFunc = function(){
    console.log("Hello World");
}

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

 

