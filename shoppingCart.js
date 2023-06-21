let shoppingCart = {};

function addToCart (item, quantity) {
    if (shoppingCart[item]) {
        shoppingCart[item] += quantity;
    }
    shoppingCart[item] = quantity;
}

function removeFromCart(item, quantity) {
    if (shoppingCart[item]) {
        shoppingCart[item] -= quantity;
        if (shoppingCart[item] <= 0) {
            delete shoppingCart[item];
        }
    }
}

function calculateTotal() {
    let total = 0;
    for (let item in shoppingCart) {
        total += shoppingCart[item];
    }
    return total;
}

module.exports = {
    shoppingCart,
    addToCart,
    removeFromCart,
    calculateTotal
};