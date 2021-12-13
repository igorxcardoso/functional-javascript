const numbers = [2, 1, 5, 3, 9]

// const numbersV2 = numbers.map(function (element) {
//     return element * 2;
// });


// const numbersV2 = numbers.map((element) =>  {
//     return element * 2;
// });

const numbersV2 = numbers.map((element) => element * 2);


// Or
// const numbersV3 = [];
// for(let i of numbers) {
//     numbersV3.push(i * 2)
// }


console.log(numbers, numbersV2)


const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.1},
    { name: 'Aida', score: 9.8}
]

// Get the students scores
const getScores = (el) => {
    return el.score
}
scores = students.map(getScores).map(Math.ceil)

console.log(scores)


// Data of the map function
const mapData = numbers.map((element, index, array) => {
    return [element, index, array];
});
console.log(mapData);