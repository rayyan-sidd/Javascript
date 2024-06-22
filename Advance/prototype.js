
let heroes = ['IronMan', 'Doraemon']

let heroPower = {
    IronMan: 'Jarvis',
    Doraemon: '4-D Pocket'
}

Object.prototype.helloRayyan = function(){
    console.log('Rayyan says Hello');
}

heroes.helloRayyan() //Rayyan says Hello  ('heroes' is an array and yet due to prototypal inheritence it got access to the function defined in the object's prototype.)

Array.prototype.Rayyan = function(){
    console.log("Rayyan doesn't say hello");
}

heroes.Rayyan() //Rayyan doesn't say hello
// heroPower.Rayyan() //TypeError: heroPower.Rayyan is not a function   (heroPower cant access to the function defined in the array's prototype)


//Another method of prototypal inheritance: (outdated approach)

const gamer = {
    name: 'rayyan'
}

const detail = {
    __proto__: gamer //this will inherit all the properties of the referred object.
}

console.log(detail.name); //rayyan


//modern syntax:

Object.setPrototypeOf(detail, gamer) //detail will inherit all the properties of gamer object.



let myName = 'Rayyan   '

console.log(myName.trueLength); //lets suppose we want to make a method 'trueLenght' that works like '.trim().length'

String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength() //True length is: 6