const fs = require('fs')
const path = require('path')

const file_path = path.join(__dirname, 'data.txt')

showContent = (error, content) => {
    console.log(content.toString())
}


fs.readFile(file_path, {}, showContent)

console.log(file_path)