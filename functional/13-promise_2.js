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
    return new Promise(function(keepPromise) {
        setTimeout(() => {
            console.log('Running promise...', time)
            keepPromise('XXXX')
        }, time)
    })
}

// Call the waitFor three times
waitFor()
        .then(() => waitFor(3000))
        .then(() => waitFor())
        // .then(v => console.log(v))