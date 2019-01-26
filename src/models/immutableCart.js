import CartItem from './cartItem';

export default class ImmutableCart {
  constructor(items) {
    this.items = items.map(item => new CartItem({...item}));
  }

  _incrementItemQuantity(item, quanity){
    const newQuantity = quanity + item.quantity;
    return this.updateItemByCode({...item, quantity: newQuantity});
  }

  updateItemByCode(item) {
    const updatedItems = this.items.map(i => i.code === item.code ? item : i);
    return new ImmutableCart(updatedItems);
  }

  findItemByCode(code){
    const matchingItem = this.items.find(i => i.code === code);
    return matchingItem ? {...matchingItem} : matchingItem;
  }

  addItem(item, quantity = 1) {
    const existingItem = this.findItemByCode(item.code);
    if(existingItem)
      return this._incrementItemQuantity(existingItem, quantity);
    else
      return new ImmutableCart([...this.items, {...item, quantity}]);
  }

  getItems() {
    return this.items.map(i => ({...i}))
  }
}
