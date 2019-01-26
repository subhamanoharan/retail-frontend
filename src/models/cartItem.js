export default class CartItem {
  constructor({name, code, quantity = 1, sp}){
    this.name = name;
    this.code = code;
    this.quantity = quantity;
    this.sp = sp;
  }
}
