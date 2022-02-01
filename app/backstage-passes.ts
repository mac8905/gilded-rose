import {
  FIVE_DAYS_FOR_THE_CONCERT,
  TEN_DAYS_FOR_THE_CONCERT,
  ZERO_DAYS_FOR_SALE,
} from './constants';
import { Item } from './item';

export class BackstagePasses extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.decreaseSellIn();
    this.increaseQuality();

    if (this.sellIn < TEN_DAYS_FOR_THE_CONCERT) {
      this.increaseQuality();
    }

    if (this.sellIn < FIVE_DAYS_FOR_THE_CONCERT) {
      this.increaseQuality();
    }

    if (this.sellIn < ZERO_DAYS_FOR_SALE) {
      this.resetQuality();
    }
  }
}
