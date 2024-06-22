//object literals - not singleton
 const sym = Symbol("key1") //symbol declaration.


const user = { 
    [sym]: "mykey", //syntax to define symbols.
    name: "Rayyan",
    "fullName": "Mohammad Rayyan", //can only be accessed using method 2 given below.
    age: 17,
    location: "Jaunpur",
    email: "rayyan123@gmail.com",
    isLoggedIn: true,
} //object declaration (singleton)
 

//accessing object elements:
console.log(user.age); //method 1
console.log(user["fullName"]); //method2 (we use "" because the keys(identifier names or numbers) in an objects are stored as strings.)
console.log(user[sym]); //syntax to access the symbol.


 //overriding values:
 user.name = "roiyawn" //changes 'name' from rayyan to roiyawn.
 Object.freeze(user) //this will stop any further changes in the object's values.


 //function as an object:
 user.welcome = function(){
    // console.log(`Hello user, ${this.name}`);
 }
//  console.log(user.welcome());


//Object declaration using constructor (Singleton)
const user1 = new Object()
user1.name = "rayyan"
user1.id = "Roiyawn"
console.log(user1); //{ name: 'rayyan', id: 'Roiyawn' }


//objects nesting:
const user2 = {
    fullname: {
        firstName: "Mohammad",
        lastName: "Rayyan",
    }
}

console.log(user2.fullname.firstName); //Mohammad (to access nested operators just add a dot and access it.)


//to add the operators:
const target = {1: "a", 2: "b"}
const source = {3: "a", 4: "b"}

const obj1 = Object.assign(target, source) //(one way to add the objects, 1st element in the parenthesis is the target and the other is the source that gets added to the target element. Better to always use target element as '{}').
console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  


const obj2 = {...{},  ...target, ...source} // (most effective way to add objects using SPREAD OPERATOR '...' same as used in arrays.)
console.log(obj2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  


//Array of objects:
const arr = [
    {
        id: "1",
        name: "Hamza"
    },
    {
        id: "2",
        name: "Maaz"
    },
    {
        id: "3",
        name: "Rayyan"
    },
]

const nameOfObject1 = arr[1].name
console.log(nameOfObject1); //Maaz (returns the name of the object at 1st index (2nd object) the array)


//Keys, Values
const objj = {
    1: "hello",
    name: "Rayyan",
}
console.log(Object.keys(objj)); //[ '1', 'name' ] (returns keys of the object.)
console.log(Object.values(objj)); //[ 'hello', 'Rayyan' ] (returns values present inside the object.)


//Object destructuring:
const course = {
    courseName: "Js Beginner series",
    price: "Free",
    courseTeacher: "Hitesh Chaudhary"
}
 const{courseTeacher: teacher} = course //a syntax to reduce the usage of "course.courseTeacher" to access it, we just need to use "teacher" now.

 //JSON API (just a brief overview)
//  {
//     "name": "rayyan",
//     "id": "1221",
//  } //looks like objects, here keys are also written as strings. (ignore the errors its actually correct.)


//this keyword: it is used to refer elements of the current context or scope.
const hero = {
    hero1: "spiderman",
    welcomeMessage: function(){
        console.log(`${this.hero1}, welcome to Avengers!`); //this.hero1 suggest the hero1 from this very object 'hero'
    }
}


//Objects are not iterable  we have other way(like forin loop) to iterate it but using forof loop syntax, we cant
const myobject = {
    js: 'javascript',
    cpp: 'c++',
    java: 'java'
}

for (const key in myobject) {
    console.log(`${key} is the shortcut for ${myobject[key]}`);
}


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



//Prototypes:

function multiplyBy5(num){
    return num*5
}
multiplyBy5.halua = 2
console.log(multiplyBy5.halua);  //2 (yes function is also an object in js) 
console.log(multiplyBy5(5));//25
console.log(multiplyBy5.prototype);// {}

function createUser(username, score){
     this.username = username
     this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score of ${this.user} is ${this.score}`);
}

const rayyan = new createUser('Rayyan', '1500') //if we dont write 'new' keyword, it'll return "TypeError: Cannot read properties of undefined (reading 'increment')"
const maaz = new createUser('Maaz',  150)

rayyan.increment() //we dont need to access it using 'rayyan.prototype.increment()', JS does is implicitly just like in arrays and all.
rayyan.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

 */

