import { ZERO_DAYS_FOR_SALE } from './constants';
import { Item } from './item';

export enum ItemType {
  AgedBrie = 'Aged Brie',
  BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
  Sulfuras = 'Sulfuras, Hand of Ragnaros',
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (
        item.name == ItemType.AgedBrie ||
        item.name == ItemType.BackstagePasses
      ) {
        item.updateQuality();
        continue;
      }

      if (item.name != ItemType.Sulfuras) {
        item.decreaseQuality();
      }

      if (item.name != ItemType.Sulfuras) {
        item.decreaseSellIn();
      }

      if (item.sellIn < ZERO_DAYS_FOR_SALE) {
        if (item.name != ItemType.Sulfuras) {
          item.decreaseQuality();
        }
      }
    }

    return this.items;
  }
}
