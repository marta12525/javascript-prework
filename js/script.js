function playGame(playerInput){
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    /*
    if(randomNumber == 1){
        computerMove = 'kamień';
    } else if(randomNumber == 2) {
        computerMove = 'papier';
    } else if(randomNumber == 3) {
        computerMove = 'nożyce';
    }
    */
    printMessage('Mój ruch to: ' + computerMove);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
    /*
    if(playerInput == '1'){
        playerMove = 'kamień';
    } else if(playerInput == '2') {
        playerMove = 'papier';
    } else if(playerInput == '3') {
        playerMove = 'nożyce';
    }
    */
    printMessage('Twój ruch to: ' + playerMove);

    let gameScore = displayResult(computerMove, playerMove);

    printMessage('a więc... ' + gameScore);
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