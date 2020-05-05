// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// Ui elements 
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-value'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listner
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, '#C23530', '#FFA19D')
    }

    // Check if won
    if (guess === winningNum) {
        //  disable input
        guessInput.disabled = true;
        // Set message
        setMessage(`${winningNum} is correct, YOU WIN!`, '#15A353', '#7bed9f');
         // Play Again?
         guessBtn.value = 'Play Again';
         guessBtn.className += 'play-again';

    } else {
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            //  disable input
            guessInput.disabled = true;
            // Set message
            setMessage(`Game Over, you lost. the correct number was ${winningNum}`, '#C23530', '#FFA19D');
            // Play Again?
            guessBtn.value = 'Play Again';
            guessBtn.className += 'play-again';

        } else {
            // game continues  - answer wrong

            // Clear input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, '#b71540');
        }
    }
});


// Get winning num
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


// Set Message
function setMessage(msg, color, bgColor) {
    message.style.color = color;
    message.style.background = bgColor;
    message.textContent = msg;

}