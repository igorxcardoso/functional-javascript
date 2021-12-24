
// Cumprir ou rejeitar uma promessa
function workOrDontWork(value, chance) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp here');

            if(Math.random() < chance) {
                reject('An error has occurred!');
            }else {
                resolve(value);
            }
        }catch(e) {
            reject(e);
        }
    });
}

workOrDontWork('Testing...', 0.9)
    .then(v => console.log(`Value: ${v}`))
    .then(
        v => console.log(v),
        error => console.log(`Specific Error: ${error}`)
    )
    .catch(error => console.log(`General Error: ${error}`))
    .then(() => console.log('End!'))