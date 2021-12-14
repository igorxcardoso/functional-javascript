setTimeout(() => {
    console.log('Running callback...')

    setTimeout(() => {
        console.log('Running callback...')

        setTimeout(function() {
            console.log('Running callback...')

        }, 2000);
    }, 2000);
}, 2000);


function waitForI(time = 2000) {
    return Promise(function(keepPromise) {
        setTimeout(() => {
            console.log('Running promise...')
            keepPromise()
        }, time);
    })
}