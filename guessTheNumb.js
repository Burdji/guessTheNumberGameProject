function guessTheNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    let answer;
    let recursiveAsyncReadLine = function (guess) {
        readline.question('Guess the number (0-100): ', number => {
            guess= Number(number);
            if (guess <= 100 && guess >= 0){
                if (guess == computerGuess) {
                    console.log('Correct! You guessed the number and won the game.');
                    readline.question('Would you like to play again?\nType "y" for yes or any other key for no: ', answer => {
                        answer= answer;
                        if (answer==='Y'||answer==='y'){
                            readline.close();
                            return guessTheNumber();
                        } else {
                            console.log('Thank you for playing!');
                            return readline.close();
                        }
                    })
                } else if (guess < computerGuess){
                    console.log('Aim Higher');
                    recursiveAsyncReadLine()
                } else if (guess > computerGuess){
                    console.log('Aim Lower');
                    recursiveAsyncReadLine()
                }
            } else {
                console.log('Invalid number! Please try again!');
                recursiveAsyncReadLine();
            }
    
        });
    }
    recursiveAsyncReadLine();
}
guessTheNumber()
