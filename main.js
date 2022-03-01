import { $arenas, $formFight } from './constants/constants.js';
import { firstPlayer, secondPlayer } from './constants/players.js';
import { generateLogs } from './utils/logs.js';
import { createPlayer } from './utils/creations.js';
import { enemyAttack, playerAttack, fightResult } from './utils/actions.js';

$arenas.appendChild(createPlayer(firstPlayer));
$arenas.appendChild(createPlayer(secondPlayer));

generateLogs('start', firstPlayer, secondPlayer);

$formFight.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const enemy = enemyAttack();
  const player = playerAttack();

  if (enemy.hit !== player.defence) {
    firstPlayer.changeHP(enemy.value);
    firstPlayer.renderHP();
    generateLogs('hit', secondPlayer, firstPlayer, enemy.value);
  } else {
    generateLogs('defence', firstPlayer, secondPlayer)
  }

  if (player.hit !== enemy.defence) {
    secondPlayer.changeHP(player.value);
    secondPlayer.renderHP();
    generateLogs('hit', firstPlayer, secondPlayer, player.value);
  } else {
    generateLogs('defence', secondPlayer, firstPlayer)
  }

  fightResult();
});
