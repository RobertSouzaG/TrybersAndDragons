import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

export default class Pvp extends Battle {
  private _chracter1: Fighter;
  private _chracter2: Fighter;

  constructor(character1: Fighter, character2: Fighter) {
    super(character1);
    this._chracter1 = character1;
    this._chracter2 = character2;
  }

  fight(): number {
    while (this._chracter1.lifePoints > 0 && this._chracter2.lifePoints > 0) {
      this._chracter1.attack(this._chracter2);
      this._chracter2.attack(this._chracter1);
    }

    return super.fight();
  }
}