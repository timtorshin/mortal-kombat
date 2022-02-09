// Task 0
const firstPlayer = {
  name: 'SCORPION',
  hp: '50',
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Ninjato', 'Kunai'],
  attack: function() {
    console.log(firstPlayer.name + ' Fight...');
  }
};

const secondPlayer = {
  name: 'SUB-ZERO',
  hp: '80',
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Sword', 'Scepter'],
  attack: function() {
    console.log(secondPlayer.name + ' Fight...');
  }
};

// Task 3
function createPlayer(playerClass, playerData) {
  const $player = document.createElement('div');
  $player.classList.add(playerClass);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  $player.appendChild($progressbar);
  $player.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = playerData.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = playerData.name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $img.src = playerData.img;

  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');

  $arenas.appendChild($player);
}

createPlayer('player1', firstPlayer);
createPlayer('player2', secondPlayer);

// // Task 1, 2
// function createPlayer(playerClass, playerName, playerHP, playerImage) {
//   const $player = document.createElement('div');
//   $player.classList.add(playerClass);

//   const $progressbar = document.createElement('div');
//   $progressbar.classList.add('progressbar');

//   const $character = document.createElement('div');
//   $character.classList.add('character');

//   $player.appendChild($progressbar);
//   $player.appendChild($character);

//   const $life = document.createElement('div');
//   $life.classList.add('life');
//   $life.style.width = playerHP + '%';

//   const $name = document.createElement('div');
//   $name.classList.add('name');
//   $name.innerText = playerName;

//   $progressbar.appendChild($life);
//   $progressbar.appendChild($name);

//   const $img = document.createElement('img');
//   $img.src = playerImage;

//   $character.appendChild($img);

//   const $arenas = document.querySelector('.arenas');

//   $arenas.appendChild($player);
// }

// createPlayer('player1', 'SCORPION', 50, firstPlayer.img);
// createPlayer('player2', 'SUB-ZERO', 80, secondPlayer.img);
