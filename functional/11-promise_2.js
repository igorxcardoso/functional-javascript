// setTimeout(() => {
//     console.log('Running callback...')

//     setTimeout(() => {
//         console.log('Running callback...')

//         setTimeout(function() {
//             console.log('Running callback...')

//         }, 2000);
//     }, 2000);
// }, 2000);


function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log('Running promise...', time)
            resolve('XXXX')
        }, time)
    })
}

// Call the waitFor three times
waitFor()
        .then(() => waitFor(3000))
        .then(() => waitFor())
        .then(v => console.log(v))  // Print the resolve()

// Vai chamar waitFor() que retorna uma Proise