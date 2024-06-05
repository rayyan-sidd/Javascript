const accountId = 144553

let accountEmail = "mohammadrayyansiddiqui786@gmail.com" // defining a variable
let accountState; //an undefined variable.

var accountPassword = "231cns" //'var' could be used to define a variable but ALWAYS prefer 'let' over var.(because of issue in block and functional scope.)

accountCity = "Jaipur" // Possible way to define a variable but a wrong practise in long term!

// accountId = 2
//not allowed to assign a constant variable.
accountEmail = "HELLOBHAI@js.com"
accountPassword = "83ehdkc"
accountCity = "Gotham"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])