export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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
        if (item.quality > MIN_QUALITY) {
          if (item.name != ItemType.Sulfuras) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < MAX_QUALITY) {
          item.quality = item.quality + 1;
          if (item.name == ItemType.BackstagePasses) {
            if (item.sellIn < TEN_DAYS_FOR_THE_CONCERT) {
              if (item.quality < MAX_QUALITY) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < FIVE_DAYS_FOR_THE_CONCERT) {
              if (item.quality < MAX_QUALITY) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }

      if (item.name != ItemType.Sulfuras) {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < ZERO_DAYS_FOR_SALE) {
        if (item.name != ItemType.AgedBrie) {
          if (item.name != ItemType.BackstagePasses) {
            if (item.quality > MIN_QUALITY) {
              if (item.name != ItemType.Sulfuras) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < MAX_QUALITY) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
