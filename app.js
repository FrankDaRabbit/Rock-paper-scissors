const game = () => {

    let pScore = 0;
    let cScore = 0;
    let winningScore = 1;
    //const newGameBtn = document.querySelector('.new-game button');
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');




        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            // const input = document.querySelector(".final-score").value;
            // console.log(input);
            //winningScore = input;
            // console.log(winningScore, "ws")
        });
    };
    // play match

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        // start new game button

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {

                this.style.animation = '';

            });
        })
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function () {
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];



                setTimeout(() => {
                    // comparing hands
                    compareHands(this.textContent, computerChoice);

                    // update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                    /*
                                        console.log(pScore);
                                        if (pScore >= winningScore) {
                                            console.log("player wins")
                                            document.querySelector('.winner').textContent = "Player won this game!";
                                            startNewGame();
                                        } else if (cScore >= winningScore) {
                                            console.log("comp wins")
                                            document.querySelector('.winner').textContent = "Computer won this game!";
                                            startNewGame();
                                        }*/

                }, 2000);

                resetHands();
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            })

        });

        const resetHands = () => {
            computerHand.src = `./assets/rock.png`;
            playerHand.src = `./assets/rock.png`;
        }
        // start new game button


    }

    const compareHands = (playerChoice, computerChoice) => {
        // update text for winner
        const winner = document.querySelector('.winner');
        //checking cases for who wins
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            updateScore();
            return;
        }
        //check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Computer won this round!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player won this round!';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer won this round!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player won this round!';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer won this round!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player won this round!';
                pScore++;
                updateScore();
                return;
            }
        }

    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    /*const startNewGame = () => {
        document.querySelector(".final-score").value = '';
        pScore = 0;
        cScore = 0;
        winningScore = 0;

    }*/

    // call all inner functions

    startGame();
    playMatch();
};

// start the game function
game();