import Product from "../Product";

export default class Appliance extends Product {
  constructor(name, brand, price, model, productionDate, weight) {
    super(name, brand, price);
    this.model = model;
    this.productionDate = productionDate;
    this.weight = weight;
  }
}
