const submit = document.getElementById("subt");
const prevGuesses = document.querySelector(".guesses");
const remGuesses = document.querySelector(".lastResult");
let count = 10;
const lowhi = document.querySelector(".lowOrHi");
let number = Math.round(Math.random() * 100 + 1);
let playGame = true;
console.log(number);
let previousList = [];
const playAgain = document.createElement('span');
playAgain.textContent = "Click here to play again!";
playAgain.style.color = "red";
playAgain.style.cursor="pointer";

playAgain.addEventListener("click", () => {
    playGame = true;
    count = 10;
    remGuesses.textContent = count;
    lowhi.textContent = "";
    prevGuesses.textContent = "";
    document.querySelector(".guessField").removeAttribute('disabled', '');
    number = Math.round(Math.random() * 100 + 1);
    playAgain.remove();
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (playGame == true) {
        const userInput = Number(document.querySelector(".guessField").value);
        function validateGuess() {
            if ((userInput <= 0 || userInput > 100 || isNaN(userInput))) {
                alert("Enter a valid number!");
                return false;
            }
            return true
        }
        if (validateGuess() && playGame) {
            count--;
            remGuesses.textContent = count;
            previousList.push(userInput);
            prevGuesses.textContent = prevGuesses.textContent + " " + userInput;
            if (userInput > number) {
                lowhi.textContent = "too high!";
            }
            else if (userInput < number) {
                lowhi.textContent = "too Low!";
            }
            else if (userInput === number) {
                alert("You won!");
                document.querySelector(".guessField").setAttribute('disabled', '');
                lowhi.textContent = "";
                playGame = false;
                document.getElementById("wrapper").appendChild(playAgain);
            }
            if (count === 0) {
                alert("you lost! The number was "+number+"!");
                playGame = false;
                lowhi.textContent = "";
                document.querySelector(".guessField").setAttribute('disabled', '');
                document.getElementById("wrapper").appendChild(playAgain);
            }
        }
        document.querySelector(".guessField").value = "";
    }
})
