import { elHP, changeHP, renderHP, attack } from '../utils/methods.js';

export const firstPlayer = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Ninjato', 'Kunai'],
  elHP,
  changeHP,
  renderHP,
  attack,
};

export const secondPlayer = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Sword', 'Scepter'],
  elHP,
  changeHP,
  renderHP,
  attack,
};
