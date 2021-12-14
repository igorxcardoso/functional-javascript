store = [
    {name: 'Mesa', quantity: 2, price: 321.20},
    {name: 'Cadeira', quantity: 8, price: 91.54},
    {name: 'Notebook', quantity: 12, price: 2192.9},
    {name: 'Cabo', quantity: 7, price: 1.81},
    {name: 'Blusa', quantity: 0, price: 32.2}
];

const notZero = item => item.quantity > 0
console.log(store.filter(notZero))