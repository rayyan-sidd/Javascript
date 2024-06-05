//In future, refer to 'https://tc39.es/proposal-temporal/docs/index.html'


//Date is an object in js and is stores as number of milliseconds since January 01,1970(the epoch)

let myDate = new Date()
console.log(myDate); //unreadable actually

//readable formats for date and time (methods)
console.log(myDate.toString()); //Wed Apr 03 2024 15:50:56 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Wed Apr 03 2024
console.log(myDate.toISOString()); //2024-04-03T10:24:45.306Z
console.log(myDate.toJSON()); //2024-04-03T10:25:15.456Z
console.log(myDate.toLocaleDateString()); //3/4/2024
console.log(myDate.toLocaleString()); //3/4/2024, 3:56:28 pm
console.log(myDate.toLocaleTimeString()); //3:57:03 pm
console.log(myDate.toTimeString()); //15:58:17 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); //Wed, 03 Apr 2024 10:29:00 GMT
console.log(myDate.getTimezoneOffset()); //-330

let newDate = new Date(2024, 3, 3) // a way to store date (months in js start with 0 and thus, 3 here represents april)
console.log(newDate.toDateString());//Wed Apr 03 2024

