import { AgedBrie } from '@/aged-brie';
import { BackstagePasses } from '@/backstage-passes';
import { ItemType } from '@/enums';
import { GildedRose } from '@/gilded-rose';
import { Sulfuras } from '@/sulfuras';

describe('Gilded Rose', () => {
  describe('Aged Brie', () => {
    it('should increase quality of Aged Brie', () => {
      const gildedRose = new GildedRose([
        new AgedBrie(ItemType.AgedBrie, 10, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
    });

    it('should increase quality of Aged Brie twice when sellIn is 0', () => {
      const gildedRose = new GildedRose([
        new AgedBrie(ItemType.AgedBrie, 0, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12);
    });

    it('should never increase quality of Aged Brie above 50', () => {
      const gildedRose = new GildedRose([
        new AgedBrie(ItemType.AgedBrie, 10, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Backstage passes', () => {
    it('should increase quality of Backstage passes by 1 when there are more than 10 days', () => {
      const gildedRose = new GildedRose([
        new BackstagePasses(ItemType.BackstagePasses, 11, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
    });

    it('should increase quality of Backstage passes by 2 when there are 10 days or less', () => {
      const gildedRose = new GildedRose([
        new BackstagePasses(ItemType.BackstagePasses, 10, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12);
    });

    it('should increase quality of Backstage passes by 3 when there are 5 days or less', () => {
      const gildedRose = new GildedRose([
        new BackstagePasses(ItemType.BackstagePasses, 5, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(13);
    });

    it('should drops quality of Backstage passes to 0 when sellIn is 0', () => {
      const gildedRose = new GildedRose([
        new BackstagePasses(ItemType.BackstagePasses, 0, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it('should never increase quality of Backstage passes above 50', () => {
      const gildedRose = new GildedRose([
        new BackstagePasses(ItemType.BackstagePasses, 10, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it('should never decrease quality of Backstage passes below 0', () => {
      const gildedRose = new GildedRose([
        new BackstagePasses(ItemType.BackstagePasses, 0, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Sulfuras', () => {
    it('should never decrease or increase quality of Sulfuras', () => {
      const gildedRose = new GildedRose([
        new Sulfuras(ItemType.Sulfuras, 10, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(10);
      expect(items[0].sellIn).toBe(10);
    });
  });
});
