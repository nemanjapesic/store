import Product from '../Product';

export default class Clothing extends Product {
  constructor(name, brand, price, size, color) {
    super(name, brand, price);
    this.size = size;
    this.color = color;
  }

  getProductDetails() {
    return `${this.name} ${this.brand} ${this.size} ${this.color}`;
  }
}
