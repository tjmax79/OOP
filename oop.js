
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}


class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const cartItem = new ShoppingCartItem(product, quantity);
        this.items.push(cartItem);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalItems() {
        return this.items.length;
    }

    displayCart() {
        return this.items.map(item => ({
            productName: item.product.name,
            quantity: item.quantity,
            totalPrice: item.calculateTotalPrice()
        }));
    }

    calculateTotalCartPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
}


const product1 = new Product(1, 'Laptop', 1500);
const product2 = new Product(2, 'Phone', 800);

const myCart = new ShoppingCart();
myCart.addItem(product1, 1);
myCart.addItem(product2, 2);

console.log(myCart.displayCart());
console.log('Total items:', myCart.getTotalItems());
console.log('Total cart price:', myCart.calculateTotalCartPrice());

myCart.removeItem(2);
console.log('After removing item:', myCart.displayCart());
