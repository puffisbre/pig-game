document.addEventListener("DOMContentLoaded", () => {
    const dice1 = document.getElementById("dice-1");
    const dice2 = document.getElementById("dice-2");
    const player1RoundScore = document.getElementById("score-0");
    const player2RoundScore = document.getElementById("score-1");
    const player1Score = document.getElementById('current-0');
    const player2Score = document.getElementById('current-1');
    const playDiceBtn = document.querySelector(".btn-roll");
    const holdScoreBtn = document.querySelector(".btn-hold");
    const resetBtn = document.querySelector(".btn-new")

    let player1turn = true;
    let dice1score;
    let dice2score;

    playDiceBtn.addEventListener("click", playDice);
    holdScoreBtn.addEventListener("click", handlePlayer);
    resetBtn.addEventListener("click", resetGame);
    let player1RoundTotal = 0;
    let player2RoundTotal = 0;
    let player1Total = 0;
    let player2Total = 0;
    function playDice(){
    if(player1turn === true){
        dice1score = Math.floor(Math.random() * 6) + 1;
        dice1.src = `img/dice-${dice1score.toString()}.png`;
    }else if(player1turn === false){
        dice2score = Math.floor(Math.random() * 6) + 1;
        dice2.src = `img/dice-${dice2score.toString()}.png`;
    }
     setTimeout(() => {
        checkScore();
      }, 100);
      
    }

    function checkScore(){
      
        if(player1turn === true){
            if(dice1score > 1){
                player1RoundTotal = player1RoundTotal + dice1score;
                player1RoundScore.innerHTML = player1RoundTotal;
            }else if (dice1score <= 1){
                alert("YOU GOT A 1, PLAYER 2 TURN")
            player1RoundScore.innerHTML = 0;
            player1RoundTotal = 0;
            player1turn = !player1turn;
            }
        }else if(player1turn === false){
            if(dice2score > 1){
                player2RoundTotal = player2RoundTotal + dice2score;
                player2RoundScore.innerHTML = player2RoundTotal;
            }else if (dice2score <= 1){
                alert("YOU GOT A 1, PLAYER 1 TURN")
            player2RoundScore.innerHTML = 0;
            player2RoundTotal = 0;
            player1turn = !player1turn;
            }
        }


      
    }

    function handlePlayer(){
        if(player1turn === true){
            player1Total = player1Total + player1RoundTotal;
            player1Score.innerHTML = player1Total.toString();
            player1RoundScore.innerHTML = 0;
            player1RoundTotal = 0;
         }else if (player1turn === false){
            player2Total = player2Total + player2RoundTotal;
            player2Score.innerHTML = player2Total.toString();
            player2RoundScore.innerHTML = 0;
            player2RoundTotal = 0;
         }
        player1turn = !player1turn;
        alert("SWITCH PLAYER");
    }

    function resetGame(){
        alert("NEW GAME STARTED");
        player1turn = true;
        player1RoundScore.innerHTML = 0;
        player1Score.innerHTML = 0;
        player1Total = 0;
        player2RoundScore.innerHTML = 0;
        player2Score.innerHTML = 0;
        player2Total = 0;
        dice1.src = `img/dice-5.png`;
        dice2.src = `img/dice-5.png`;
    }


})