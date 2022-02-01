import { MAX_QUALITY, MIN_QUALITY, ZERO_DAYS_FOR_SALE } from './constants';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public decreaseQuality(): void {
    if (this.quality > MIN_QUALITY) {
      this.quality -= 1;
    }
  }

  public increaseQuality(): void {
    if (this.quality < MAX_QUALITY) {
      this.quality += 1;
    }
  }

  public resetQuality(): void {
    this.quality = MIN_QUALITY;
  }

  public updateQuality() {
    this.decreaseQuality();
    this.decreaseSellIn();

    if (this.sellIn < ZERO_DAYS_FOR_SALE) {
      this.decreaseQuality();
    }
  }

  public decreaseSellIn(): void {
    this.sellIn -= 1;
  }
}
