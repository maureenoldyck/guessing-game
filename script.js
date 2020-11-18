(function () {


    document.getElementById("guess-form").addEventListener("submit", compareUserGuess);


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

    function generateSecretNumber() {
        const secretNumber = getRandomNumber(1, 22);
        return secretNumber;
    }

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }


})();