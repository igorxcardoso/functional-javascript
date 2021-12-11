// Create a range function


const myRangeFunction = (...params) => {
    returnArry = [];
    lengthParams = params.length;

    if(lengthParams == 1) {
        for(var i = 1; i <= params[0]; i++) {
            returnArry.push(i);
        }
    }else if(lengthParams == 2) {
        if(params[0] < params[1]) {
            for(var i = params[0]; i <= params[1]; i++) {
                returnArry.push(i);
            }
        }else { // (params[0] > params[1])
            for(var i = params[0]; i >= params[1]; i--) {
                returnArry.push(i);
            }
        }

    }else if(lengthParams == 3) {
        for(var i = params[0]; i <= params[1]; i+=params[2]) {
            returnArry.push(i);
        }
    }

    return returnArry;
}


// range(5) -> [1, 2, 3, 4, 5]
console.log(myRangeFunction(5));


// range(6, 11) -> [6, 7, 8, 9, 10, 11]
console.log(myRangeFunction(6, 11))


// range(10, 19, 2) -> [10, 12, 14, 16, 18]
console.log(myRangeFunction(10, 19, 2))

// range(6, 2) -> [6, 5, 4, 3, 2]
console.log(myRangeFunction(6, 2))