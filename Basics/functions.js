function spellMyName(){
    console.log("R");
    console.log("A");
    console.log("Y");
    console.log("Y");
    console.log("A");
    console.log("N");
} //syntax for defining a function. "anything inside the curly braces is the scope of the function."

spellMyName //reference of the function.
spellMyName() // execution of the function.

function addTwoNumbers(n1,n2){ //"inputs passed in the parenthesis when function is defined are called Parameters."
   const n3 = n1+n2 
   console.log(n3);
}
addTwoNumbers(3, 4) //7 "inputs passed in the parenthesis when function is called are called Arguments."


//return and console in a function
function two(n3, n4){
    let sum = n3 + n4
    return sum
    console.log(sum); //no output because in a function, after the "return" statement, no line of code is functional.
}
const sum = two(3 ,4) //sum = 7 now (to store the result "console log" in the function wont work and thus we need to use return.)
console.log(sum); //7



function loginUserMessage(username){
    return `${username} just Logged in!`
}
console.log(loginUserMessage("Rayyan")); //Rayyan just Logged in! (if nothing is passed in the argument then the output will be "undefined just Logged in!")


function shoppingCartPrice(...num1){ //spread/rest operator used to assign all the values passed in the argument in a single variable in the form of an array.
    return num1
}
console.log(shoppingCartPrice(200,300,287324,23873)); //[ 200, 300, 287324, 23873 ] 


//objects in functions:
const user = {
    username: "Rayyan",
    id: 123
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`); 
}
handleObject(user) //Username is Rayyan and id is 123

//another way:
handleObject({
    username: "Hinata",
    id: "Haikyuu"
}) //Username is Hinata and id is Haikyuu


//Arrays in functions:
const arr = [100, 200, 300, 400, 500]
function returnSecondElement(anyArray){
    return anyArray[1]
}

console.log(returnSecondElement(arr)); //200


  //Arrow Function:
  const add = (n1, n2) => { //"function" keyword is replaced with the arrow symbol "=>"
    return n1+n2
  } //curly braces = return keyword required.
  console.log(add(1,4)); //5

  //Another way to declare an arrow function:
  const add2 = (n1 , n2) => (n1+n2) //parenthesis or no braces = no return keyword required.
  console.log(add2(1,4)); //5
