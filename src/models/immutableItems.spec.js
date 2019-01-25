import deepFreeze from 'deep-freeze';
import ImmutableItems from './immutableItems';

describe('ImmutableItems', () => {
  const item1 = {a: 1, b: 2, code: '123'};
  const item2 = {a: 12, c: 1, code: '124'};
  const initialItems = [item1, item2];

  //This is to check that the array is not mutated by any further operation
  deepFreeze(initialItems);

  const immutableItems = new ImmutableItems(initialItems);

  it('should add a new item', () => {
    const item3 = {f: 12, h: 1};

    const itemsAfterAdding = immutableItems.addItem(item3);
    const items = itemsAfterAdding.items;

    expect(items).toHaveLength(3)
    const [i1, i2, i3] = items;
    expect(i1).toEqual(item1);
    expect(i2).toEqual(item2);
    expect(i3).toEqual(item3);
  });

  describe('findItemByCode', () => {
    it('should return matching item', () => {
      expect(immutableItems.findItemByCode('123')).toEqual(item1);
    });
    it('should return undefined when there is no match', () => {
      expect(immutableItems.findItemByCode('125')).toBeUndefined();
    });
  });

  describe('updateItemByCode', () => {
    it('should update item if it exists', () => {
      const updatedItem1 = {...item1, extra: 1};

      const updatedItems = immutableItems.updateItemByCode(updatedItem1);
      const items = updatedItems.items;

      expect(items).toHaveLength(2)
      const [i1, i2] = items;
      expect(i1).toEqual(updatedItem1);
      expect(i2).toEqual(item2);
    });
    
    it('should ignore if it does not exist', () => {
      const updatedItems = immutableItems.updateItemByCode({code: 'blah'});
      const items = updatedItems.items;

      expect(items).toHaveLength(2)
      const [i1, i2] = items;
      expect(i1).toEqual(item1);
      expect(i2).toEqual(item2);
    });
  });
});
