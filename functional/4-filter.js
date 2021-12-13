const numbers = [2, 1, 5, 0, 9];

const greaterThanZero = elem => elem > 0;
const greaterThanTen = elem => elem > 10;
const even = elem => elem % 2 == 0;

const filterGreaterThanZero = numbers.filter(elem => elem > 0)
const filterGreaterThanZero2 = numbers.filter(greaterThanZero)
const filterGreaterThanTen = numbers.filter(greaterThanTen)
const filteEven = numbers.filter(even)

console.log('oginal: ', numbers)
console.log('filterGreaterThanZero: ', filterGreaterThanZero);
console.log('filterGreaterThanZero2: ', filterGreaterThanZero2)
console.log('filterGreaterThanTen: ', filterGreaterThanTen)
console.log('filteEven: ', filteEven)

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.1},
    { name: 'Aida', score: 9.8}
];

// Filters students by score (greater than 7)
const getScore = (elem) => elem.score >= 7;
const goodStudents = students.filter(getScore);
console.log('\nstudents: ', students)
console.log('\ngoodStudents: ', goodStudents)