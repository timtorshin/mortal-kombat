import { ATTACK, HIT, $arenas, $formFight } from '../constants/constants.js';
import { firstPlayer, secondPlayer } from '../constants/players.js';
import { getRandom } from './utils.js';
import { generateLogs } from './logs.js';
import { createReloadButton, createElement } from './creations.js';

export const showResult = (name) => {
  const $resultTitle = createElement('div', 'resultTitle');
  
  if (name) {
    $resultTitle.innerText = name + ' wins';
  } else {
    $resultTitle.innerText = 'draw';
  }

  return $resultTitle;
};

export const fightResult = () => {
  if (firstPlayer.hp === 0 || secondPlayer.hp === 0) {
    createReloadButton();
    for (let item of $formFight) {
      item.disabled = true;
    }
  }

  if (firstPlayer.hp === 0 && firstPlayer.hp < secondPlayer.hp) {
    $arenas.appendChild(showResult(secondPlayer.name));
    generateLogs('end', secondPlayer, firstPlayer);
  } else if (secondPlayer.hp === 0 && secondPlayer.hp < firstPlayer.hp) {
    $arenas.appendChild(showResult(firstPlayer.name));
    generateLogs('end', firstPlayer, secondPlayer);
  } else if (firstPlayer.hp === 0 && secondPlayer.hp === 0) {
    $arenas.appendChild(showResult());
    generateLogs('draw');
  }
};

export const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
};

export const playerAttack = () => {
  const attack = {};

  for (let item of $formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  return attack;
};
