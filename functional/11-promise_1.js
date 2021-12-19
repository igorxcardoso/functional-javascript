// Promise is a function


// Promise(function)
let myPromise = new Promise(function(keepPromise) {
    // The promise pass only value, for pass many values you need create a object
    // keepPromise({
    //     x: 6,
    //     y: 9
    // })
    keepPromise(['igor', 'joão', 'pedro', 'felipe']);
});

console.log(typeof myPromise);
console.log(myPromise);
console.log('----------------');

// For acess the values in the promise
// The method 'then' receive a function too
// myPromise.then(function (value) {
//     // console.log(value.x, value.y)
//     console.log(value)
// });


// myPromise
//         .then((value) => value[0])
//         .then((value) => value[1])
//         .then(console.log);


const getFirst = arrayOrObject => arrayOrObject[0];
const getSecond = arrayOrObject => arrayOrObject[1];

myPromise
        .then(getFirst)
        .then(v => console.log(v))  // Vai pegar o retorno da chamada de cima
        // .then(getFirst)
        // .then(v => console.log(v))
        // .then(getSecond)