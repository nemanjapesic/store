import { areDatesOnSameDay, getDaysApart, getFormattedDateString, setBodyText } from './helpers';

export default class Cashier {
  static printReceipt(cart, dateAndTimeOfPurchase) {
    let subtotal = 0;
    let discountTotal = 0;
    let total = 0;
    let lines = [];

    lines.push(`Date: ${getFormattedDateString(dateAndTimeOfPurchase)}`);

    lines.push('---Products---');

    cart.forEach(({ product, quantity, type }) => {
      const cartItemTotalPrice = quantity * product.price;
      subtotal += cartItemTotalPrice;

      const cartItemDiscount = this.calculateDiscount(product, type, dateAndTimeOfPurchase);
      const cartItemDiscountPrice = cartItemTotalPrice * cartItemDiscount;

      lines.push('\n');

      lines.push(product.getProductDetails());

      lines.push(`${quantity} x $${product.price} = $${cartItemTotalPrice.toFixed(2)}`);

      if (cartItemDiscount) {
        discountTotal += cartItemDiscountPrice;
        lines.push(
          `#discount ${Math.round(cartItemDiscount * 100)}% -$${cartItemDiscountPrice.toFixed(2)}`
        );
      }
    });

    total = subtotal - discountTotal;

    lines.push('---------------------------------');
    lines.push(`SUBTOTAL: $${subtotal.toFixed(2)}`);
    lines.push(`DISCOUNT: -$${discountTotal.toFixed(2)}`);
    lines.push('\n');
    lines.push(`TOTAL: $${total.toFixed(2)}`);

    const text = lines.join('\n');
    console.log(text);
    setBodyText(text);
  }

  static calculateDiscount(product, productType, dateOfPurchase) {
    switch (productType) {
      case 'perishable':
        if (areDatesOnSameDay(product.expirationDate, dateOfPurchase)) {
          return 0.7;
        } else if (getDaysApart(product.expirationDate, dateOfPurchase) < 5) {
          return 0.3;
        }
        break;

      case 'clothing':
        const dayOfPurchase = dateOfPurchase.getDay();
        if (dayOfPurchase > 1 && dayOfPurchase < 5) {
          return 0.1;
        }
        break;

      case 'appliance':
        if (product.price > 999 && (dayOfPurchase === 5 || dayOfPurchase === 6)) {
          return 0.07;
        }
        break;

      default:
        break;
    }
  }
}
