export enum ItemType {
  AgedBrie = 'Aged Brie',
  BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
  Sulfuras = 'Sulfuras, Hand of Ragnaros',
}

export const TEN_DAYS_FOR_THE_CONCERT = 11;
export const FIVE_DAYS_FOR_THE_CONCERT = 6;
export const ZERO_DAYS_FOR_SALE = 0;
export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;

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

  public decreaseSellIn(): void {
    this.sellIn -= 1;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (
        item.name != ItemType.AgedBrie &&
        item.name != ItemType.BackstagePasses
      ) {
        if (item.name != ItemType.Sulfuras) {
          item.decreaseQuality();
        }
      } else {
        item.increaseQuality();

        if (item.name == ItemType.BackstagePasses) {
          if (item.sellIn < TEN_DAYS_FOR_THE_CONCERT) {
            item.increaseQuality();
          }

          if (item.sellIn < FIVE_DAYS_FOR_THE_CONCERT) {
            item.increaseQuality();
          }
        }
      }

      if (item.name != ItemType.Sulfuras) {
        item.decreaseSellIn();
      }

      if (item.sellIn < ZERO_DAYS_FOR_SALE) {
        if (item.name != ItemType.AgedBrie) {
          if (item.name != ItemType.BackstagePasses) {
            if (item.name != ItemType.Sulfuras) {
              item.decreaseQuality();
            }
          } else {
            item.resetQuality();
          }
        } else {
          item.increaseQuality();
        }
      }
    }

    return this.items;
  }
}
