function Product(name, price, off = 0.15) {
    this.name = name;
    this.price = price;
    this.off = off;

    this.endPrice = () => {
        return this.price * (1 -  this.off)
    }
}

const p1 = new Product('Pen', 8.32);
// console.log(typeof p1)
console.log(p1.name, p1.price, p1.endPrice());

const p2 = new Product('Freeze', 5212.3, 0.5);
// console.log(typeof p2)
console.log(p2.name, p2.price, p2.endPrice());