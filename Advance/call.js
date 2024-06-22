function setUsername(username){
    this.username = username
}

const createUser = function(username, email, password){
    setUsername.call(this, username) // '.call' is used to hold the reference of another fucntion.
    this.email = email
    this.password= password
}

const user = new createUser('rayyan', 'hello@gmail.com', 'rayyan123')

console.log(user);