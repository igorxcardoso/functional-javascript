store = [
    {name: 'Mesa', quantity: 2, price: 321.20, fragil: true},
    {name: 'Cadeira', quantity: 8, price: 91.54, fragil: false},
    {name: 'Notebook', quantity: 12, price: 2192.9, fragil: true},
    {name: 'Cabo', quantity: 1, price: 1.81, fragil: false},
    {name: 'Blusa', quantity: 2, price: 32.2, fragil: true}
];

const isFragil = item => item.fragil;
const getTotal = item => item.price * item.quantity;
const getSumTotal = (sum, item) => sum + item;
const average = (acc, elem, index, array) => {
    if(index == array.length-1) {
        return (acc += elem)/index+1
    }else {
        return acc += elem
    }
}

console.log(store.filter(isFragil))
console.log(store.map(getTotal).reduce(getSumTotal))

console.log(store.map(getTotal).reduce(average))