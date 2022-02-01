import { Item } from './item';

export const ZERO_DAYS_FOR_SALE = 0;

export class AgedBrie extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.decreaseSellIn();
    this.increaseQuality();

    if (this.sellIn < ZERO_DAYS_FOR_SALE) {
      this.increaseQuality();
    }
  }
}
