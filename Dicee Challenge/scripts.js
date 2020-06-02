let playerChoice = [0, 0];

document.getElementById('btn-reset').addEventListener('click', () => {
  document.querySelector('.player-img1').src = 'images/dice1.png';
  document.querySelector('.player-img2').src = 'images/dice1.png';
  playerChoice = [0, 0];
});

function rollDice(event) {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  event.target.src = 'images/dice' + diceValue + '.png';
}

document.querySelector('.player-div1').addEventListener('click', rollDice);
document.querySelector('.player-div2').addEventListener('click', rollDice);
