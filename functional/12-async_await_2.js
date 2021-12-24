function getNumbersIntro(min, max, noNumbers) {
    if(min > max) [max, min] = [min, max];     // Destructuring

    return new Promise((resolve, reject) => {
        const factor = max - min + 1;
        const myrandom = parseInt(Math.random() * factor) + min;

        if(noNumbers.includes(myrandom)) {
            reject(`Repeat number`);
        }else {
            resolve(myrandom);
        }
    });
}

async function getNumbersMegaSena(numbersLength, tries = 1) {
    const numbers = [];

    try{
        for(let _ of Array(numbersLength).fill())
            numbers.push(await getNumbersIntro(1, 60, numbers));
        return numbers;
    }catch(e) {      // Quando lanço a exceção rejeita a execução da promise
        if(tries > 5) {
            throw "It didn't work ... This is boring!";
        }else {
            return getNumbersMegaSena(numbersLength, tries + 1);
        }
    }
}


getNumbersMegaSena(10)
    .then(console.log)
    .catch(console.log)

// getNumbersIntro(1, 5, [2, 3])
//     .then(console.log)
//     .catch(console.log)