const fs = require('fs')
const path = require('path')


function readMyFile(file_path) {
    return new Promise(resolve => {
        // Processo assíncrono
        fs.readFile(file_path, {}, function(_, content){   // Poderia ser uma arrow-function
            resolve(content.toString());
        });
        console.log('Read late!');
    });
}

const caminhoArquivo = path.join(__dirname, 'data.txt')
// readMyFile(caminhoArquivo).then(conteudo => console.log(conteudo))
readMyFile(caminhoArquivo)
    .then(conteudo => conteudo.split('\n'))
    // .then(linhas => linhas.length())
    .then(juntar => juntar.join(', '))
    .then(conteudo => `The final values is: ${conteudo}`)
    .then(console.log);