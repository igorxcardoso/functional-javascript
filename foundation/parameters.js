// Params


// No default parameter value
function logParams(a, b, c) {
    console.log(a, b, c);
}

logParams(1, 2, 3, 4, 5);
logParams(1, 2, 3);
logParams(1, 2);
logParams(1);
logParams();

console.log('------------------')

// Default parameter value
function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c);
}

defaultParams(6, 7, 8);
defaultParams(6, 7);
defaultParams(6);
defaultParams();

console.log('------------------')

// Spread/rest (Various parameters)
// The function will receive a varied number of parameters
function logNumbers(...numbers) {
    console.log(numbers);
    // console.log(Array.isArray(numbers));
    // for(let n of numbers) {
    //     console.log(n);
    // }
}

logNumbers(1, 2, 3, 4, 5);


function sumAll(...params) {
    let sum = 0;
    for(let p of params) {
        sum += p;
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 6));
