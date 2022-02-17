import Product from "../Product";

export default class Perishable extends Product {
  constructor(name, brand, price, expirationDate) {
    super(name, brand, price);
    this.expirationDate = expirationDate;
  }
}
