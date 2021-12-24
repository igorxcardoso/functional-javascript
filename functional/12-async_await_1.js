function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), time)
    });
}

// Async vai executar ter código que parece sincrono, embora seja código assíncrono
// waitFor(2000)
//     .then(() => console.log('Running promise 1...'))
//     .then(waitFor)
//     .then(() => console.log('Running promise 2...'))
//     .then(waitFor)
//     .then(() => console.log('Running promise 3...'))


function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    });
}

// Vai retorna uma promise
async function returnValueFast() {
    return 20
}

// Vai executar o código de maneira síncrona
async function exec() {
    // let value = await returnValue();
    let value = await returnValueFast();  // O await vai extrair o valor

    await waitFor(1500);
    console.log(`Async/Await ${value}...`);

    await waitFor(1500);
    console.log(`Async/Await ${value + 1}...`);

    await waitFor(1500);
    console.log(`Async/Await ${value + 2}...`);

    return value + 3;
}

//  Errado
// v = exec();
// console.log(v);

// Correto
// exec().then(console.log)


// Outro modo
async function trueExec() {
    const value = await exec();
    console.log(value);
}

trueExec()