//if/else

if(2 === "2"){ //condition as a parameter must always be true ('===' is used to typecheck, here 2 is a integer whereas "2" is a string so its false)
    console.log("True");
}
else{ //runs when the condition in 'if' results false
    console.log("false");
}


const score = 100
if(score >= 100){
    var power = "Fire" //use of var makes 'power' a global variable and thus its not recommended.
    console.log(`Power = ${power}`);
}

console.log(power); //Fire


//switch:
const month = 3 
switch (month) {  //month = key
    case 1: //1 ,2 ,3 , these are called values.
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("halua");
        break;
}


/* falsy values:
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

    Truthy values:
    "0", 'false', " ", [], {}, function(){},  
*/


//Nullish Coalescing Operator: ?? (basically its a fall back operator working like:)
val1 = 100 ?? 200
console.log(val1); //100
val1 = null ?? 200
console.log(val1); //200
val1 = undefined ?? 200
console.log(val1); //200
val1 = null ?? 100 ?? 200
console.log(val1); //100

/*Ternary operators: ? :
condition : true ? false
*/
const n = 100
n <= 80 ? console.log("less than 80") : console.log("more than 80");


/* 

*/