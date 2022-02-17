export default class Product {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }

  getProductDetails() {
    return `${this.name} ${this.brand}`;
  }
}
