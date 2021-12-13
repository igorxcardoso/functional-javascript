// Function expression
const incrementOne = function (params) {
    return params + 1;
}


// Arrow function is always anonymous
const incrementTwo = (params) => {
    return params + 1;
}

// When we have only one parameter
const incrementThree = params => {
    return params + 1;
}

// Every line of code will be returned automatically. The 'return' is implicit.
const incrementFour = params => params + 1;

// With two params
const sum = (a, b) => a + b;


console.log(incrementOne(1));
console.log(incrementTwo(2));
console.log(incrementThree(3));
console.log(incrementFour(199));
console.log(sum(40, 21));