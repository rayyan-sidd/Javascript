//ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `New password is ${this.password}`
    }
}

const rayyan = new User('rayyan', 'rayyan@123.com', 'rayyan123')
console.log(rayyan.encryptPass());