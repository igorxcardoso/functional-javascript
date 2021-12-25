// Função construtora
function Product(name, price, off = 0.15) {
    this.name = name;
    this.price = price;
    this._off = off;

    this.endPrice = () => {
        return this.price * (1 -  this._off)
    }
}

Product.prototype.log = function() {
    console.log(`Name: ${this.name}\nPrice: R$ ${this.price}`)
}

Object.defineProperty(Product.prototype, 'off', {
    get: function() {
        return this._off
    },

    set: function(newOff) {
        if(newOff >= 0 && newOff <= 1) {
            this._off = newOff;
        }else {
            console.log('Error in the off param!');
        }
    }
});

Object.defineProperty(Product.prototype, 'offStr', {
    get: function() {
        return `${this._off * 100}% de desconto!`
    }
});

const p1 = new Product('Pen', 8.32);
// console.log(typeof p1)
// console.log(p1.name, p1.price, p1.endPrice());
p1.log()

const p2 = new Product('Freeze', 5212.3, 0.5);
// console.log(typeof p2)
// console.log(p2.name, p2.price, p2.endPrice());
p2.off = .999;

console.log(p2.endPrice())
console.log(p2.off)
console.log(p2.offStr)