
// Vai gerar um número aleátio depois de um determinado tempo
function getNumbersIntro(min, max, time) {
    if(min > max) [max, min] = [min, max];     // Destructuring
    return new Promise(resolve => {
        setTimeout(() => {
            const factor = max - min + 1;
            const myrandom = parseInt(Math.random() * factor) + min;
            resolve(myrandom);
        }, time);
    });
}


const generateNumbers = () => {
    // calls = []
    // for(let i = 0; i < length; i++) {
    //     console.log(i)
    //     calls.push(getNumbersIntro(20, 100, 10*(i+1)));
    // }

    //  Vai retornar uma lista de Promise
    return Promise.all([        // Vai chamar 0 then quando resolver todas as chamadas
        getNumbersIntro(1, 20, 100),
        getNumbersIntro(1, 20, 200),
        getNumbersIntro(1, 20, 300),
        getNumbersIntro(1, 20, 1000),
        getNumbersIntro(1, 20, 400),
        getNumbersIntro(1, 20, 600),
        getNumbersIntro(1, 20, 1009),
        getNumbersIntro(1, 20, 100)
    ]);
}

console.time('promise')
generateNumbers()
    .then(numbers => console.log(numbers))
    .then(() => {
        // console.timeLog('promise');
        console.timeEnd('promise');
    })

// getNumbersIntro(10, 20)
//     .then(num => num * 2)                           // NUmber timer 2
//     .then(numX2 => `The number was ${numX2}`)
//     .then((v) => console.log(v))
//     .then()


//  Notas
// O método Promise.all(iterable) retorna uma única Promise que resolve
// quando todas as promises no argumento iterável forem resolvidas ou
// quando o iterável passado como argumento não contém promises. É
// rejeitado com o motivo da primeira promise que foi rejeitada.