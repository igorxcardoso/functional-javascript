class Product {
    constructor(name, price, off = 0.5) {
        this._name = name;
        this._price = price;
        this.off = off;
    }

    get endPrice() {
        return this.price * (1 - this.off)
    }

    get name() {
        return `Product: ${this._name}`;
    }

    set name(newName) {
        this._name = newName.toUpperCase();
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        if(newPrice >= 0) {
            this._price = newPrice;
        }
    }
}


const p1 = new Product('Pen', 10.00);
// console.log(typeof p1)
p1.name = 'pen';
p1.price = -20.00;
console.log(p1.name, p1.price, p1.endPrice);

const p2 = new Product('Freeze', 5000, 0.5);
// console.log(typeof p2)
p2.name = 'freeze';
p2.price = 6000.00;
console.log(p2.name, p2.price, p2.endPrice);