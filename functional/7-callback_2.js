const fs = require('fs')
const path = require('path')


// ### File read with callback function ###

// The __dirname get the current path on the OS
const file_path = path.join(__dirname, 'data.txt')
console.log('File path: ', file_path)

function showContent(_, content) {
    console.log(content.toString())
}
console.log('Start...')

// The readFile function receives the path as options and the callback
// Don't wait for the file to read
fs.readFile(file_path, {}, showContent) // or fs.readFile(file_path, showContent)
fs.readFile(file_path, (_, data) => console.log(data.toString()))

console.log('End...')


// ******  readFile ******
// function readFile(path: fs.PathOrFileDescriptor, options: {
//     encoding?: null;
//     flag?: string;
// } & EventEmitter.Abortable, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void (+3 overloads)
// namespace readFile


console.log('\n-------------------------------\n')
// ### File read no callback function ###
console.log('Start Sync...')

const contentSyncFile = fs.readFileSync(file_path)
console.log(contentSyncFile.toString())

console.log('End Sync...')