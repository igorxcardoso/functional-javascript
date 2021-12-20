const fs = require('fs')
const path = require('path')
const file_path = path.join(__dirname, 'data.txt')


function readMyFile() {
    return new Promise (fs.readFile(file_path, {}, (_, content) => {
        console.log(content.toString())
    }

    ));
}

readMyFile.then()