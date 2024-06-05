let value = "33"
console.log(typeof score); //string
let valueInNumber = Number(value) //conversion of string to integer
console.log(typeof valueInNumber); // Number

let rank = "23abc"
let rankInNumber = Number(rank) //conversion of string to integer
console.log(typeof rankInNumber); //Number

console.log(rankInNumber) // NaN(Not A Number) because of the alphabet present in 'rank'.  


/* Notes: while conveting into Numbers,

"3434" => 3434
"8463abd" => NaN
true => 1, false => 0
null => NaN
undefined => 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); //boolean
console.log(booleanIsLoggedIn); //true 

/*
Notes: while converting into boolean,

1 => true, 0 => false
"Rayyan" => true, "" => false 
 */


let num = 33
let str = String(num)

console.log(str); //33
console.log(typeof str); //String 

// ---------Operations----------

let val = 3
let negval = -val
console.log(negval); // -3

console.log(2+3); //add
console.log(2-3); //subtract
console.log(2*3); //mult
console.log(2/3); //divide
console.log(2%3); //remainder


let str1 = "hello"
let str2 = " rayyan"
let str3 = str1 + str2 //string addition
console.log(str3); //hello rayyan


//major confusions (dont pay much heed to this just keep learning!)

console.log("2" + 1); //21
console.log(2 + "1"); //21
console.log("2" + 1 + 1); //211
console.log(2 + 1 + "1"); //31


