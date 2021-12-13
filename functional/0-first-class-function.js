// A programming language is said to have
// First-class functions when functions in
// that language are treated like any other
// variable.


// The javascript language allows storing functions in variables


const add = function(a, b) {
    return a + b;
}

const subtract = (a, b) => a - b;

const multiply = (x, y) => {
    return x * y;
}

const divide = (a, b) => a / b;


console.log(add(1,2))
console.log(subtract(1,2))
console.log(multiply(1,2))
console.log(divide(1,2))