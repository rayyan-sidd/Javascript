 // BLOCK SCOPE: {} anything inside these curly braces is in the block scope except for when its used with the objects. In objects, curly braces are used for object declaration.
 //  GLOBAL SCOPE: anything outside the curly braces are considered to be in the global scope.
 
//example of global scope
 let a = 10
 const b = 20
 var c = 30 

 console.log(a);
 console.log(b);
 console.log(c);

 //example of block scope
 if (true) {
    let a = 100 //can only be accessed inside the block
    const b = 200 //can only be accessed inside the block
    var c = 300 //use of 'var' makes is accessible globally
 }

 console.log(a); //10
 console.log(b); //20
 console.log(c); //300
 //since 'a' & 'b' are block scope elements, they cant be accesed globally. 'c' is also a block scope but the use of 'var' removes the scope restriction for 'c'.

 
 //scopes of nested functions:
 function one(){
    const username = "Rayyan"

    function two(){ 
        const website = "Youtube"
        console.log(username); //child fucntion can access the parent function's elements.
    }
    //console.log(website); //error. Parent function cant access the child function's elements.

    two() //Rayyan
 }
 one() 


//IMPORTANT!
//hoisting concept

addone(5) //ṇo error (functions defined like this could be accessed before)
function addone(num){
    return num+1
}


addone(5) //error. (Since teh function is hold in a variable 'addTwo', it cant be accessed before the declaration.)
const addTwo = function(num){
    return num+1
}