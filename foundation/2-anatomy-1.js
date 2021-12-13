// Function declaration
// This is the traditional form of function in javascript


// Function that does not return value
function sayHello() {
    console.log('Hello!');
}

sayHello()

function sayHelloTo(name) {
    // Sem template String
    console.log('Hello ' + name + '!');

    // Template String
    console.log(`Hello ${name}!`);
}

sayHelloTo('Igor')


// Function that returns value
function returnHi() {
    return 'Hi!';
}

let get1 = returnHi();
console.log(get1);

const get2 = returnHi();
console.log(get2);

console.log(returnHi());


// Function that takes parameter and returns value
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('John'));