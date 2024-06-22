class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ //'static' keyword restricts the use of the function for any other objefct created
        return `123`
    }
}

const rayyan = new User('Rayyan')
// console.log(rayyan.createId()); //TypeError: rayyan.createId is not a function


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const halua = new Teacher('Rayyan', 'halua@gmail.com')
// console.log(halua.createId()); TypeError: halua.createId is not a function