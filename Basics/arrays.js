//copy operations with array create shallow copies. (learn about deep and shallow copies from mdn)
const arr1 = [0, 1 ,2, 3, 4, 5]

let arr2 = new Array(1, 2, 3, 4, 5) //another way to define an array


//Array methods

arr1.push(6) //adds an element in the array.
arr1.pop() //removes the last element.
arr1.unshift(0) //adds element in the beginning of the array.
arr1.shift() //removes the first element from the array.
arr1.includes(9) //checks if the desired element is present in the array or not (output is boolean type.)
arr1.indexOf(23) //gives the index of the element searched; if the element is not present then returns -1.
arr2 = arr1.join(';')
console.log(arr2); //(0;1;2;3;4;5)Adds all the elements of an array into a string, separated by the specified separator string.
arr1.slice(1, 3) //returns the array element from 1st index to 3rd (includes 1st and excludes 3rd) wihtout altering the orginal array.
arr1.splice(1, 3) //returns the array element from 1st index to 3rd (includes 1st and 3rd both) altering the orginal array which means the elements from index 1 to 3 are now removed from the arr1.
arr1.concat(arr2); //used to join two arrays
const arr3 = [...arr1, ...arr2] // spread operator '...' better way to concat 2 or more arrays into one.
arr3.flat(Infinity) //if there are multiple subarrays, this method will return a single new array merging all the sub arary elements into one (depth must be provided in the parenthesis)
console.log(Array.isArray("Rayyan")) //checks if the the provided parameter is an array (here-returns false)
console.log(Array.from("Rayyan")) // [ 'R', 'a', 'y', 'y', 'a', 'n' ] (creates an array from the provided parameter)
console.log(Array.from({name: "Rayyan"})) // interesting one-study from mdn docs

const score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ] (returns array of the value of the provided constants/variables.)



//nested Array-object loops:
const arr5 = [
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

arr5.forEach( (item) => {
    console.log(`${item.fileExtension} is the file extension for ${item.langName}`);
} )



//a method to convert objects to array: Array.from(object name) //object could be anything like NodeList or HTMLColletction.
Array.from()