//Numbers:

const score = 400 //js itself assumes it to be a number.

const balance = new Number(100) //another way to define a variable as a number. Here, we are sure to set its datatype as number.
console.log(balance);  //[Number: 100]

console.log(balance.toString()); //converts number to string.

console.log(balance.toString().length); //since number is converted to string, we can find the no. of digits using length func of string.

console.log(balance.toFixed(2)); //the parameter provided is the no. of digits after decimal point.

console.log(balance.toPrecision(3)); //rounds of the number to the desired no. of digits. for eg: 121.32 will give 121 in this case.


 const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN')); //10,00,000 (to represent the numbers in a genreal way)



 //Maths:

 console.log(Math); //Object [Math] {}

 console.log(Math.abs(-43)); //43 (gives the absolute value of the provided number).

console.log(Math.round(55.65)); //55 rounds of the number.

console.log(Math.max(2,34,5,66,3)); //66 (gives the max value element of the array)

console.log(Math.min(2,34,5,66,3)); //2 (gives the min value element of the array) 

console.log(Math.random()); //Returns a pseudorandom number between 0 and 1

console.log((Math.random()*10) +1); //returns number from 1 to 10 ('+1' is done to avoid the possibility where number still remains between 0 to 1.)

const min = 10
const max = 20
//important formula: Math.random()*(max - min + 1) + min (this will generate random numbers between min and max)
console.log(Math.floor(Math.random()* (max - min + 1)) + min ); //generate random numbers between 10 to 20.