export default class ImmutableItems {
  constructor(items) {
    this.items = items.map(item => ({...item}));
  }

  addItem(item) {
    return new ImmutableItems([...this.items, item]);
  }

  updateItemByCode(item) {
    const updatedItems = this.items.map(i => i.code === item.code ? item : i);
    return new ImmutableItems(updatedItems);
  }

  findItemByCode(code){
    const matchingItem = this.items.find(i => i.code === code);
    return matchingItem ? {...matchingItem} : matchingItem;
  }

  getItems() {
    return this.items.map(i => ({...i}))
  }
}
