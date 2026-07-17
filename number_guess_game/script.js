let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");
let myButton = document.getElementById("my-btn");
let guess = document.getElementById("guess");

let num = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessedNumbers = [];
console.log(num);


myButton.addEventListener("click", function() {
 let theGuess = Number(guess.value);
    if(theGuess < 1 || theGuess > 100){
        alert("Please enter a number between 1 and 100");
    }else {
        guessedNumbers.push(theGuess);
        no_of_guesses ++;

        if (theGuess < num){
            message1.innerHTML = `Your guess is too low`;
            message2.innerHTML = `No. of guesses: ${no_of_guesses}`;
            message3.innerHTML = `Guessed numbers are: ${guessedNumbers}`
        }else if (theGuess > num){
            message1.innerHTML = `Your guess is too high`
            message2.innerHTML = `No. of guesses: ${no_of_guesses}`;
            message3.innerHTML = `Guessed numbers are: ${guessedNumbers}`
        }else if(theGuess === num){
            message1.innerHTML = `Hooray!!!You win`;
            message2.innerHTML = `The number was ${num}`;
            message3.innerHTML = `You guesssed it in ${no_of_guesses} guesses` ;
            
        }
            
    }
    console.log(theGuess, typeof theGuess)
})

guess.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        myButton.click();
    }
})

