const shoppingCart = require('./shoppingCart');

describe('Shopping Cart Functions', () => {
    test('Add items to the cart', () => {
        shoppingCart.addToCart('bread', 2);
        shoppingCart.addToCart('eggs', 3);
        expect(shoppingCart.shoppingCart).toEqual({'bread': 2, 'eggs': 3});
    });

    test('Remove items from the cart', () => {
        shoppingCart.addToCart('bread', 2);
        shoppingCart.addToCart('eggs', 3);
        shoppingCart.removeFromCart('eggs', 1);
        expect(shoppingCart.shoppingCart).toEqual({'bread': 2, 'eggs': 2});
    });

    test('Calculate total cost of the items in the cart', () => {
        shoppingCart.addToCart('bread', 2);
        shoppingCart.addToCart('eggs', 3);
        expect(shoppingCart.calculateTotal()).toBe(5);
    });
});