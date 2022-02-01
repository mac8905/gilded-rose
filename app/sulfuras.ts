import { Item } from './item';

export class Sulfuras extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  public updateQuality() {}
}
