// const array = [1, 2, 3]
// const [x, , y] = array // Saída: x = 1 e y = 3 (Destructuring)
// Link: https://javascript.info/destructuring-assignment


function getNumbersIntro(min, max) {
    if(min > max) {
        [max, min] = [min, max];     // Destructuring
    }

    return new Promise((resolve) => {
        const factor = max - min + 1;
        const myrandom = parseInt(Math.random() * factor) + min;
        resolve(myrandom);
    });
}

getNumbersIntro(10, 20)
                        .then(num => num * 2)                           // NUmber timer 2
                        .then(numX2 => `The number was ${numX2}`)
                        // .then(console.log)
                        .then((v) => console.log(v))
                        .then()