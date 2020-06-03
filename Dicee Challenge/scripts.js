let playerChoice = [0, 0];
let playedCount = 0;

document.getElementById('btn-reset').addEventListener('click', () => {
  document.querySelector('#player-img1').src = 'images/dice1.png';
  document.querySelector('#player-img2').src = 'images/dice1.png';
  document.querySelector('#status-img1').src = '';
  document.querySelector('#status-img2').src = '';
  playerChoice = [0, 0];
  playedCount = 0;
});

function rollDice(event) {
  const diceId = event.target.id;
  const playerNumber = diceId.substr(diceId.length - 1, 1) - 1;
  if (playerChoice[playerNumber] !== 0) {
    return;
  }

  playedCount++;
  let diceValue = Math.floor(Math.random() * 6) + 1;
  event.target.src = 'images/dice' + diceValue + '.png';
  playerChoice[playerNumber] = diceValue;

  if (playedCount === 2) {
    if (playerChoice[0] > playerChoice[1]) {
      document.querySelector('#status-img1').src = 'images/win.png';
      document.querySelector('#status-img2').src = 'images/loose.png';
    } else if (playerChoice[0] < playerChoice[1]) {
      document.querySelector('#status-img1').src = 'images/loose.png';
      document.querySelector('#status-img2').src = 'images/win.png';
    } else {
      document.querySelector('#status-img1').src = 'images/replay.png';
      document.querySelector('#status-img2').src = 'images/replay.png';
    }
  }
}

document.querySelector('#player-img1').addEventListener('click', rollDice);
document.querySelector('#player-img2').addEventListener('click', rollDice);
