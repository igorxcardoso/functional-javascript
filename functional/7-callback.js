exec = (fn, a, b) => {
    return fn(a, b);
}

const sumOfTerminal = (x, y) => console.log(x + y)
const subOfTerminal = (w, z) => console.log(w + z)

exec(sumOfTerminal,10, 20)
exec(subOfTerminal,40, 20)

const result = exec(sumOfTerminal,10, 20)
console.log(result)

//  Example de callback function
setInterval(() => {
    console.log('Exec ...')
}, 5000);