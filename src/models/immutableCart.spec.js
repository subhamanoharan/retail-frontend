import deepFreeze from 'deep-freeze';
import ImmutableCart from './immutableCart';

describe('ImmutableCart', () => {
  const item1 = {name: 'a1', quantity: 15, code: '123', sp: 1};
  const item2 = {name: 'a2', quantity: 5, code: '124', sp: 2};
  const initialItems = [item1, item2];

  //This is to check that the array is not mutated by any further operation
  deepFreeze(initialItems);

  const immutableCart = new ImmutableCart(initialItems);

  describe('findItemByCode', () => {
    it('should return matching item', () => {
      expect(immutableCart.findItemByCode('123')).toEqual(item1);
    });
    it('should return undefined when there is no match', () => {
      expect(immutableCart.findItemByCode('125')).toBeUndefined();
    });
  });

  describe('updateItemByCode', () => {
    it('should update item if it exists', () => {
      const updatedItem1 = {...item1, quantity: 20};

      const updatedCart = immutableCart.updateItemByCode(updatedItem1);
      const items = updatedCart.getItems();

      expect(items).toHaveLength(2)
      const [i1, i2] = items;
      expect(i1).toEqual(updatedItem1);
      expect(i2).toEqual(item2);
    });

    it('should ignore if it does not exist', () => {
      const updatedItems = immutableCart.updateItemByCode({code: 'blah'});
      const items = updatedItems.items;

      expect(items).toHaveLength(2)
      const [i1, i2] = items;
      expect(i1).toEqual(item1);
      expect(i2).toEqual(item2);
    });
  });

  describe('addItem', () =>{
    it('should add a new item', () => {
      const item3 = {name: 'a3', code: '125', sp: 5};
      const expectedItem3 = {...item3, quantity: 12};

      const cartAfterAdding = immutableCart.addItem(item3, 12);
      const items = cartAfterAdding.getItems();

      expect(items).toHaveLength(3)
      const [i1, i2, i3] = items;
      expect(i1).toEqual(item1);
      expect(i2).toEqual(item2);
      expect(i3).toEqual(expectedItem3);
    });

    it('should update quantity of existing item by 1 by default', () => {
      const cartAfterAdding = immutableCart.addItem({code: item2.code});
      const items = cartAfterAdding.getItems();

      expect(items).toHaveLength(2)
      const [i1, i2] = items;
      expect(i1).toEqual(item1);
      expect(i2).toEqual({...item2, quantity: item2.quantity + 1});
    });

    it('should update quantity of existing item by given quantity', () => {
      const cartAfterAdding = immutableCart.addItem({code: item2.code}, 3);
      const items = cartAfterAdding.getItems();

      expect(items).toHaveLength(2)
      const [i1, i2] = items;
      expect(i1).toEqual(item1);
      expect(i2).toEqual({...item2, quantity: item2.quantity + 3});
    });
  });
});
