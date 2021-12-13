// Anonymous function
// IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
    let x = 3;
    console.log(`Result = ${a + b + c}`);
    console.log(x);
})(1, 2, 3);  // The semicolon is required


(function () {
    let x = 411;
    console.log(x)
})();



// Arrow function
// IIFE - Immediately Invoked Function Expression
(() => {
    console.log('Arrow #01');
})();

// Or

(() => console.log('Arrow #02'))();
