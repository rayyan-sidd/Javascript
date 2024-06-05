//for loop:
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */


//keywords: break and continue
//break:
for (let i = 1; i <= 20; i++) {
    if (i==5) {
        break; //stops at 5 
    }
    console.log(`Value of i is ${i}`); //till i=4
}
//Continue:
for (let i = 1; i <= 20; i++) {
    if (i==5) {
        continue; //skips further code for i = 5
    }
    console.log(`Value of i is ${i}`);  
}


//while loops:
/* while (condition) {
    
} */

let i = 0
while (i <= 10) {
    console.log(`Value of i is ${i}`);
    i++
}

//do-while loops: the code runs atleast one time because the condition is checked at last.
/* do { 
    
} while (condition); */

let score =1
do {
    console.log(`Score is ${score}`);
    score++
} while (score < 10);


//for of loop:
/* for (const iterator of object) {
    
} */
const myarr = ["Hello", "Rayyan", "so", "jao"]
for (const arr of myarr) {
    console.log(`element of array is ${arr}`);
}
const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(greet); //prints every letter of the string "greeting" including spaces.
}


//Maps: Map objects hold key-value pairs and remembers the original insertion order of the keys. (only unique values) (not iteratable.)

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
console.log(map.get('IN'))

for (const [key,value] of map) {
    console.log(key , ':-', value);
}


//forin loop: 
//Objects are not iterable; we have other way (forin loop) to iterate it but using this syntax, we cant
const myobject = {
    js: 'javascript',
    cpp: 'c++',
    java: 'java'
}

for (const key in myobject) //for in loop for objects directly prints the key value
 {
    console.log(`${key} is the shortcut for ${myobject[key]}`);
}


//forin loop for array:
const lang = ['js', 'python', 'java', 'ruby']
for (const key in lang) {
   console.log(key);
} //for in loop for array is printing the index number for all the keys in the array.


//foreach loop(mostly used for arrays)
const lang1 = ['js', 'python', 'java', 'ruby']
lang1.forEach( function (item){
    console.log(item);
} )
// another way:
function printMe(item){
    console.log(item);
}
lang1.forEach(printMe)


//nested Array-object loops:
const arr1 = [
    {
        langName: 'Javascript',
        fileExtension: '.js'
    },
    {
        langName: 'Java',
        fileExtension: '.java'
    },
    {
        langName: 'Python',
        fileExtension: '.py'
    }
]

arr1.forEach( (item) => {
    console.log(`${item.fileExtension} is the file extension for ${item.langName}`);
} )


//Very Important array method: arr.filter( callback function )
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNum.filter( (num) => num>4 ) //returns all the arary elements according to the given condition (here, num>4)
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

//major mistake:
const newNum1 = myNum.filter( (num) => {  //if we are opening a scope using these curly braces then it is must to use  'return' keyword.
    return num>4
} )
console.log(newNum1); //[ 5, 6, 7, 8, 9, 10 ]



//A very important example and use of '.filter':

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]; //an array of objects holding details of different books.

  const userBook = books.filter( (bk) => bk.genre === 'History' ) //filters out all the books with genre = History.
  console.log(userBook); /* output:
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  */


//Use of '.map':
const myNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nambar = myNum1.map( (num) => num+10 ) //this will iterate over every element of the array and works upon the condition provided. kinda same like '.filter', it also returns a value by itself and if we open a scope, must remember to use 'return'.
console.log(nambar);


//chaining: using multiple fucntions at a same time,

const newNums1 = myNum1.map( (num) => num*10 ).map( (nam) => nam + 1 ) //mapping of the mapped array of myNum1.
console.log(newNums1);  /*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/


//reduce:
const qwerty = [1, 2, 3, 4]
const total1 = qwerty.reduce( function(acc, currVal) { //currVal is the element from the array which is being processed duting the iteration.
    return acc+currVal
}, 0) //this 0 here is the initial value for accumulation 'acc', after that whatever this function returns goes back as the accumulation value

console.log(total1);//10

//Using arrow function:
const total = qwerty.reduce( (acc, currVal) => acc + currVal, 0 )
console.log(total);//10


//example use of '.reduce()'
 const shoppingCart = [
    {
        item: "Java course",
        price: 1999
    },
    {
        item: "Python course",
        price: 999
    },
    {
        item: "C++ course",
        price: 1999
    },
    {
        item: "Javascript course",
        price: 0
    },
 ]

 const shoppingPrice = shoppingCart.reduce( function(total, item) {
    return total + item.price
 },0 )
console.log(shoppingPrice);