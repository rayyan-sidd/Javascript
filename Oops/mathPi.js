const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter) /*{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }*/  //this value of pi is hardcoded enough to not to be altered but we CAN change some other things.

//how to alter the properties?:

const halwa = {
    name: 'Gajar ka halwa',
    price: '10rs'
}

   console.log(Object.getOwnPropertyDescriptor(halwa, 'name'));/* {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  } */ //currently the properties are false lets change it to 
   
Object.defineProperty(halwa, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(halwa, 'name')) /* {
    value: 'Gajar ka halwa',
    writable: false,
    enumerable: false,
    configurable: true
  } */