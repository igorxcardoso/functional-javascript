// Promise is a function

let a = 1

let myPromise = new Promise(function(keepPromise) {
    keepPromise(50)
});

console.log(myPromise);