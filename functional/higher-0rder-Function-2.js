// This technique is called: Curring
// The parameters are partially passed
function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax)
    }
}

// The anonymous function inside finalPrice was stored in const nycFinalPrice
const nycFinalPrice = finalPrice(0.0875)


console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.4))
console.log(nycFinalPrice(225.9))



// console.log(finalPrice(0.0875)(25.1))
// console.log(finalPrice(0.0875)(21.4))
// console.log(finalPrice(0.0875)(225.9))