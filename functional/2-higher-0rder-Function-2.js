// This technique is called: Curring
// The parameters are partially passed
console.log('-------- nycFinalPrice -----------')
function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax)
    }
}

// The anonymous function inside finalPrice was stored in const nycFinalPrice
const nycFinalPrice = finalPrice(0.0875)


console.log(nycFinalPrice(25.1));
console.log(nycFinalPrice(21.4));
console.log(nycFinalPrice(225.9));


// console.log(finalPrice(0.0875)(25.1))
// console.log(finalPrice(0.0875)(21.4))
// console.log(finalPrice(0.0875)(225.9))

console.log('-------- nycFinalPrice2 -----------')
// Using only arrow functions
finalPrice2 = (tax) => {
    return (price) => {
        return price * (1 + tax)
    }
}
const nycFinalPrice2 = finalPrice2(0.0875)
console.log(nycFinalPrice2(25.1));
console.log(nycFinalPrice2(21.4));
console.log(nycFinalPrice2(225.9));



console.log('-------- nycFinalPrice3 -----------');
// Using only arrow functions
finalPrice3 = (tax) => (price) => price * (1 + tax);

const nycFinalPrice3 = finalPrice3(0.0875)
console.log(nycFinalPrice3(25.1));
console.log(nycFinalPrice3(21.4));
console.log(nycFinalPrice3(225.9));