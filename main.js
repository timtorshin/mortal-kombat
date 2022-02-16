const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const firstPlayer = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Ninjato', 'Kunai'],
  attack: function() {
    console.log(firstPlayer.name + ' Fight...');
  }
};

const secondPlayer = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Sword', 'Scepter'],
  attack: function() {
    console.log(secondPlayer.name + ' Fight...');
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(playerData) {
  const $player = createElement('div', 'player' + playerData.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = playerData.hp + '%';
  $name.innerText = playerData.name;
  $img.src = playerData.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
}

function getRandomHP(number) {
  return Math.ceil(Math.random() * number);
}

function showResult(name) {
  const $resultTitle = createElement('div', 'resultTitle');
  
  if (name) {
    $resultTitle.innerText = name + ' wins';
  } else {
    $resultTitle.innerText = 'draw';
  }

  return $resultTitle;
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');

  player.hp -= getRandomHP(20);

  if (player.hp <= 0) {
    player.hp = 0;
  }

  $playerLife.style.width = player.hp + '%';
}

$randomButton.addEventListener('click', function() {
  changeHP(firstPlayer);
  changeHP(secondPlayer);

  if (firstPlayer.hp === 0 || secondPlayer.hp === 0) {
    $randomButton.disabled = true;
  }

  if (firstPlayer.hp === 0 && firstPlayer.hp < secondPlayer.hp) {
    $arenas.appendChild(showResult(secondPlayer.name));
  } else if (secondPlayer.hp === 0 && secondPlayer.hp < firstPlayer.hp) {
    $arenas.appendChild(showResult(firstPlayer.name));
  } else if (firstPlayer.hp === 0 && secondPlayer.hp === 0) {
    $arenas.appendChild(showResult());
  }
});

$arenas.appendChild(createPlayer(firstPlayer));
$arenas.appendChild(createPlayer(secondPlayer));
