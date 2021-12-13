// Signature
// arry.reduce(other_func, initialValue)


const numbers = [2, 1, 5, 0, 9];


// I can't sum all elements of the arry using 'map' or 'filter'
const getElement = (allOf, elem) => allOf + elem;
const sumElement = numbers.reduce(getElement);

const sumElement2 = numbers.reduce((sum, elem) => {
    return sum + elem
});

console.log('sumElement: ', sumElement);
console.log('sumElement2: ', sumElement2);


// With initial value
const sumElementWithInitialValue = numbers.reduce(getElement, 100);
console.log('sumElementWithInitialValue: ', sumElementWithInitialValue)


// Average
const average = (acc, elem, index, array) => {
    if(index == array.length-1) {
        return (acc + elem) / array.length;
    }else {
       return acc + elem;
    }
}
const averageResult = numbers.reduce(average);
console.log('average: ', averageResult);


const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.1},
    { name: 'Aida', score: 9.8}
];
