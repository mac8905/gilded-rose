import { Item } from './item';

export enum ItemType {
  AgedBrie = 'Aged Brie',
  BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
  Sulfuras = 'Sulfuras, Hand of Ragnaros',
}

export const TEN_DAYS_FOR_THE_CONCERT = 11;
export const FIVE_DAYS_FOR_THE_CONCERT = 6;
export const ZERO_DAYS_FOR_SALE = 0;

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name == ItemType.AgedBrie) {
        item.updateQuality();
        continue;
      }

      if (item.name != ItemType.BackstagePasses) {
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
        if (item.name != ItemType.BackstagePasses) {
          if (item.name != ItemType.Sulfuras) {
            item.decreaseQuality();
          }
        } else {
          item.resetQuality();
        }
      }
    }

    return this.items;
  }
}
