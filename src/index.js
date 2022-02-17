import Perishable from './products/Perishable';
import Clothing from './products/Clothing';
import Appliance from './products/Appliance';
import Cashier from './Cashier';

const cart = [
  {
    product: new Perishable('apples', 'BrandA', 1.5, new Date('2021-06-14')),
    quantity: 2.45,
    type: 'perishable',
  },
  {
    product: new Perishable('milk', 'BrandM', 0.99, new Date('2022-02-02')),
    quantity: 3,
    type: 'perishable',
  },
  {
    product: new Clothing('T-shirt', 'BrandT', 15.99, 'M', 'violet'),
    quantity: 2,
    type: 'clothing',
  },
  {
    product: new Appliance('laptop', 'BrandL', 2345, 'ModelL', new Date('2021-03-03'), 1.125),
    quantity: 1,
    type: 'appliance',
  },
];

const dateAndTimeOfPurchase = new Date(Date.parse('2021-06-14T12:34:56Z'));

Cashier.printReceipt(cart, dateAndTimeOfPurchase);
