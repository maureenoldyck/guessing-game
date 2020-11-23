(function () {


// Element listener when the user submit the number
    document.getElementById("guess-form").addEventListener("submit", compareUserGuess);


// Compare function with an event preventer to not let de default function of refresh get through
// In this function we call the generete secret number to compare with the users number they submitted
    function compareUserGuess(event) {
        event.preventDefault();

        const secretNumber = generateSecretNumber();
        const userNumber = document.getElementById("guess").value;


        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else if (secretNumber - 1 == userNumber || secretNumber + 1 == userNumber) {
            alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

// This function generates a random number between 1 and 22 and returns that number
    function generateSecretNumber() {
        const secretNumber = getRandomNumber(1, 22);
        return secretNumber;
    }

// This function generates a random number
    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }


})();