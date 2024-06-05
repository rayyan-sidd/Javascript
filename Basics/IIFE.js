//Immediately Invoked Function Expression: To restrict the pollution from global scope elements, we use IIFE.


//We just wrap the function inside a parenthesis and then invoke it directly using another set of parenthesis "()()" and then end it by using a semicolon

(function hello(){ //named IIFE
    console.log(`Database connected`);
})();

//using arrow function:
(() => {  
    console.log(`Database 2 connected`);
})();

//using variables/parameters:
((name) => {
    console.log(`Database 3 conncected to user ${name}`);
})("Rayyan") //Database 3 conncected to user Rayyan