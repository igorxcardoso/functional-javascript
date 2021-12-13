const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.1},
    { name: 'Aida', score: 9.8}
];


const greatStudents = (elem) => elem.score >= 7;
const getScore = (elem) => elem.score;
const average = (acc, elem, index, array) => {
    if(index == array.length-1) {
        return (acc + elem) / array.length;
    }else {
       return acc + elem;
    }
}

console.log(
    'good students average: '
    , students.filter(greatStudents).map(getScore).reduce(average)
)