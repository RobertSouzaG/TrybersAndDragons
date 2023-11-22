import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Necromancer extends Archetype {
  static _count = 0;
  private _energyType: string;

  constructor(name: string) {
    super(name);
    Necromancer._count += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._count;
  }
}

export default Necromancer;