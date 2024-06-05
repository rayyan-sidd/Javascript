//Two types: Stack and Heap

//stack is for primitive datatypes:
let myName = "Rayyan"
let hisName = myName
hisName = "Hamza"

console.log(myName); //Rayyan
console.log(hisName); //Hamza

// this happens because in stack we get a copy of data and the changes are made in that copy and thus 'myName' isnt altered.

//Heap is for non-primitve datatypes:
let user1 = {  
    name: Rayyan,
    age: 21,
}

let user2 = user1 //user2 got the details from user1
user2.name = "Hamza" //this will change the value of 'name' from "Rayyan" to "Hamza".

console.log(user1.name); //Hamza
console.log(user2.name); //Hamza

//this happens because in Heap, original data is referred and the alterations take place in the data itself (no copy is made).