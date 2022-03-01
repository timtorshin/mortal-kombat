export function attack() {
  console.log(this.name + ' Fight...');
}

export function elHP() {
  return document.querySelector('.player' + this.player + ' .life');
}

export function changeHP(randomHP) {
  this.hp -= randomHP;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

export function renderHP() {
  this.elHP().style.width = this.hp + '%';
}
