const name = "Rayyan"
const score = 100

console.log(name + score + " Sahi hai bhai"); //dont use this syntax to concatinate strings (modern coding perspective) instead use :

console.log(`Hello my name is ${name} and my score is ${score}`); //string interpolation.


//some common string methods
const idName = new String(' RayyanGamer  ')  

console.log(idName.charAt(3)); // y-gives the character at that index (4th character of the string.)

console.log(idName.substring(0, 4)); //returns the string within the provided index range excluding outer limit. i.e., 4 (here - ' ray')

console.log(idName.trim()); //removes all the extra spaces from front and end of the string

console.log(idName.toUpperCase()); //converts the string to upper case.

console.log(idName.toLowerCase()); //converts the string to lower case.

console.log(idName.indexOf('G')); //gives the index of the desired character from the string. (here- 7)

console.log(name.concat(" ", idName)); //Rayyan  RayyanGamer  (used to joing two or more strings)


console.log(idName.split(' ')); //used to split the string into multiple elements everytime the provided characted is identified and then store those elements into an array.


console.log(idName.replace('y', 'Y')); // RaYYanGamer (finds the 1st given character and replaces it with the 2nd)


console.log(idName.includes('Rayyan')); //true (tells us if the provided character is present in the string or not.)
