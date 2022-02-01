import { ZERO_DAYS_FOR_SALE } from './constants';
import { Item } from './item';

export class Conjured extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality(): void {
    this.decreaseSellIn();
    this.decreaseQuality();
    this.decreaseQuality();

    if (this.sellIn < ZERO_DAYS_FOR_SALE) {
      this.resetQuality();
    }
  }
}
