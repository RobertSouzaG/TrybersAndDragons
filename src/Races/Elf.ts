import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._count += 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._count;
  }
}

export default Elf;