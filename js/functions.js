function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if(argComputerMove == 'kamień' && playerMove == 'papier') {
        return 'Ty wygrywasz!';
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        return 'Przegrałeś!';
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        return 'Remis!';
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier') {
        return 'Remis!';
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        return 'Ty wygrywasz!';
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        return 'Przegrałeś!';
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        return 'Przegrałeś!';
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        return 'Remis!';
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        return 'Ty wygrywasz!';
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
        return 'Spróbuj jeszcze raz';
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
        return 'Spróbuj jeszcze raz!';
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
        return 'Spróbuj jeszcze raz!';
    }
}