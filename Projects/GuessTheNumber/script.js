let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);

const submit = document.querySelector('#submit')
let guessnum = document.querySelector('#guess')
const previousGuess = document.querySelector('#prevGuess')
const remGuesses = document.querySelector('#remGuess')
const lowOrHigh = document.querySelector('#lowOrHigh')
const result = document.querySelector('#result')
const newGame = document.querySelector('#new')

let prevGuess = []
let numGuess = 1
let playGame = true  

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(guessnum.value)
        console.log(guess);
        validateGuess(guess)
        });
}

function validateGuess(guess){
    if(isNaN(guess))
        { result.style.color = 'red'
            // alert('Please enter a valid Number')
            displayMessage(`Please enter a valid Number!`)
        }
        else if(guess < 1){
            result.style.color = 'red'
            displayMessage(`Please enter a Number greater than 1.`)
        }
        else if(guess >100){
            result.style.color = 'red'
            (`Please enter a Number smaller than 100.`)
        }
        else{
            prevGuess.push(guess)
            if(numGuess >= 10){
                displayGuess(guess)
                displayMessage(`Game Over. The correct number was ${randomNumber}`)

                endGame()
            }
            else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }

}

function checkGuess(guess){
    if(guess === randomNumber)
        { 
             result.style.color = 'green'
            displayMessage(`Yay! You WON`)
            endGame()
        }
    else if(guess > randomNumber)
        { result.style.color = 'red'
    displayMessage(`Too High!`)
}
else if(guess < randomNumber)
    { result.style.color = 'red'
        
            displayMessage(`Too Low!`)
        }
}

function displayGuess(){
    guessnum.value = '';
    previousGuess.innerHTML = `Previous Guesses: ${prevGuess.join(', ')}`
    numGuess++;
    remGuesses.innerHTML = `Remaining Guesses: ${11-numGuess}`;
}

function displayMessage(guess){
    result.innerHTML = `<h2>${guess}</h2>`;
}
function endGame(){
    guessnum.value = '';
    guessnum.setAttribute('disabled', '')
    // result.innerHTML = '';
    playGame = false;
    // submit.innerHTML = 'New Game'
    // newGame.addEventListener('click', function(){
    //     startGame()
    // })
}
function startGame(){
    
    // newGame.addEventListener('click', function(event){
        randomNumber = parseInt(Math.random()*100+1);
        console.log(randomNumber);
        // submit.innerHTML = 'Submit Guess'
        previousGuess.innerHTML = `Previous Guesses: `
        numGuess = 1
        result.innerHTML = '';
        remGuesses.innerHTML = `Remaining Guesses: 10`;
        guessnum.removeAttribute('disabled', '')
        
        prevGuess = []
    playGame= true;  
    // console.log(playGame);
}

newGame.addEventListener('click', function () {
    startGame();
});