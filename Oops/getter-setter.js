class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    set email(value_){
        this.value_ = value_
    }
    get email(){
        return this.value_.toUpperCase()
    }

    set password(value){ //method name should be the same as that of the property defined.
        this.value = value
    }
    get password(){  
        return `${this.value}Rayyan` //encrypting the password
    }
}

const rayyan = new User('roiyawn@123.com', '123')
console.log(rayyan.password); //123Rayyan
console.log(rayyan.email); //ROIYAWN@123.COM