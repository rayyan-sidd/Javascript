//The Promise OBJECT represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.*/

/* the Promise object is initialised like mentioned below, it needs a callback function as parameter and that function has 2 parameters itself, namely, 'Resolve' and 'Reject'

resolve(): used when the promise task is completed and it links with the '.then(callback)' keyword.

rejecte(): used when the promise task isnt completed or when error is true and it links to '.catch(callback)' method.

finally(): more like a default method that performs tasks either way.
 */


const promiseOne = new Promise(function(resolve, reject){
    //Do an async task: Database calls, cryptography etc.
    setTimeout(() => {
        console.log('Async task is complete');
        resolve() //this will link the resolve to 'then()'
    }, 1000);
})

promiseOne.then(function(){
    console.log("Async resolved");
})


//Another way to do the same thing: (without holding the promise in a variable)

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 Completed');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: 'Rayyan', 
            email: 'rayyan@123.com'
        })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user); //{ username: 'Rayyan', email: 'rayyan@123.com' }
})


const promiseFour = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username: 'Roiyawn',
                password: '123'
            })
        } else {
            reject('Error: Something went wrong!')
        }
    }, 1000);
})

promiseFour.then( (user) => {
    return user.username
} ).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'))


//async await:
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username: 'Javascript',
                password: '123'
            })
        } else {
            reject('Error: JS   went wrong!')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


//fetch():
 async function getUserName(){
    try {
        const response = await fetch ('https://randomuser.me/api/') //'await' is used cause it takes time to fetch the api
        const data = await response.json() //await is used here too bcz it takes time to convert the string data to JSON format.
        const name = data.results[0].name.first
        console.log(name);
    } catch (error) {
        console.log('E: ', error);
    }
 }
 getUserName()
  //    Watch vid. 42 of Chai or Javascript to learn more about fetch().  