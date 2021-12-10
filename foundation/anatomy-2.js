// Anonymous function
(function (a, b, c) {
    return a + b + c;
})

// Function expression (this is a anonymous function too)
const sum = function (a, b) {
    return a + b;
}

const result = sum(5, 1)
console.log(result);

const anotherSum = sum;
console.log(anotherSum(3, 7));