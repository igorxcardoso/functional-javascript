

// Passing one function to another function
function run(fn) {
    return fn();
}

function sayHello() {
    console.log('Hello!');
}

run(sayHello);


// Passing an anonymous function to another function
run(function() {
    console.log('run!!')
});


// Passing a JavaScript function
const result = run(Math.random)
console.log(result)