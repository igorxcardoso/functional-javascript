const numbers = [1, 2, 3, 4, 5, 6];
const double = (n, i, a) => n * 2 + i + a.length;

console.log(numbers.map(double))

// (method) Array<number>.map<number>(callbackfn: (value:
//     number, index: number, array: number[]) => number,
//     thisArg?: any): number[]


// Calls a defined callback function on each element of an array,
// and returns an array that contains the results.

// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer
// in the callbackfn function. If thisArg is omitted, undefined is
// used as the this value.

console.log('--------------------')

loja = [
    {name: 'Mesa', quantity: 2, price: 321.8},
    {name: 'Cadeira', quantity: 8, price: 91.8},
    {name: 'Notebook', quantity: 12, price: 2192.8},
    {name: 'Cabo', quantity: 7, price: 1.8}
];

const getName = myItem => myItem.name;
const getQuantity = myItem => myItem.quantity;
const getPrice = myItem => myItem.price;
const getTotal = myItem => myItem.price*myItem.quantity;

const names = loja.map(getName);
const prices = loja.map(getPrice);
const quantity = loja.map(getQuantity);
const total = loja.map(getTotal);

console.log(names)
console.log(prices)
console.log(quantity)
console.log(total)


console.log('\n---------- My Map Function ----------\n')

Array.prototype.myMap = function(fn) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        newArray.push(result)
    }
    return newArray;
}

const names2 = loja.myMap(getName);
const prices2 = loja.myMap(getPrice);
const quantity2 = loja.myMap(getQuantity);
const total2 = loja.myMap(getTotal);

console.log(names2)
console.log(prices2)
console.log(quantity2)
console.log(total2)
