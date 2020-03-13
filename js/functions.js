function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if (argMoveId === 1) {
      return 'rock';
    } else if (argMoveId === 2) {
        return 'paper';
    } else if (argMoveId === 3) {
        return 'scissors';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
	if (argComputerMove === 'rock' && argPlayerMove === 'paper') {
        return 'You win!';
    } else if (argComputerMove === 'rock' && argPlayerMove === 'scissors') {
        return 'You lose!';
    } else if (argComputerMove === 'rock' && argPlayerMove === 'rock') {
        return 'it&apos;s a draw!';
    } else if (argComputerMove === 'paper' && argPlayerMove === 'paper') {
        return 'it&apos;s a draw!';
    } else if (argComputerMove === 'paper' && argPlayerMove === 'scissors') {
        return 'You win!';
    } else if (argComputerMove === 'paper' && argPlayerMove === 'rock') {
        return 'You lose!';
    } else if (argComputerMove === 'scissors' && argPlayerMove === 'paper') {
        return 'You lose!';
    } else if (argComputerMove === 'scissors' && argPlayerMove === 'scissors') {
        return 'it&apos;s a draw!';
    } else if (argComputerMove === 'scissors' && argPlayerMove === 'rock') {
        return 'You win!';
    } else if (argComputerMove === 'rock' && argPlayerMove === 'nieznany ruch') {
        return 'Try again!';
    } else if (argComputerMove === 'paper' && argPlayerMove === 'nieznany ruch') {
        return 'Try again!';
    } else if (argComputerMove === 'scissors' && argPlayerMove === 'nieznany ruch') {
        return 'Try again!';
    }
}