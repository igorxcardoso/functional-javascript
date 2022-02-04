/* Callback: Uma função de callback recebe o erro no primeiro
parâmetro e os contéudos nos outros parâmetro.
O callback é uma operaçõa assíncrona.
*/


const fileSystem = require('fs')

console.log(1)

// Callback
// fileSystem.readFile('./file1.txt', (error1, contents1) => {
//   fileSystem.readFile('./file1.txt', (error2, contents2) => {
//     console.log('f1', error1,String(contents1))
//     console.log('f2', error2,String(contents2))
//   });
// });



const readFile = file => new Promise((resolve, reject) => {
  fileSystem.readFile((file), (error, content) => {
    if(error) reject(error)
    else resolve(content)
  });
});

readFile('./file1.txt').then(content => {
  console.log(String(content))
})


console.log(2)

console.log(3)