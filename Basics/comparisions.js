//basic comparision operators like '<, >, <=, >=, ==, != etc.' are same like java.

//some unpredictable comparisions:
console.log("2" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true (this is because an equality check == and comparision <, >, >= work differently.  Comparisions convert null to a number, treating it as a 0. Thats why null >=0 is true and null > 0 is false.)
console.log(undefined == 0); //always false



console.log("2" == 2); //true because conversion takes place.
console.log("2" === 2 ); //false because '===' is known as strict check and it also checks for the datatype.


