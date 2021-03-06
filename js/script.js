{
const playGame = function(playerInput){
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = getMoveName(randomNumber);

    printMessage('My move is ' + computerMove);

    const playerMove = getMoveName(playerInput);

    printMessage('and your is ' + playerMove);

    const gameScore = displayResult(computerMove, playerMove);

    printMessage('sooo... ' + gameScore);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
}