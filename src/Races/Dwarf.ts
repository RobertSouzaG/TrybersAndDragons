import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._count += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._count;
  }
}

export default Dwarf;