const pdf = require('html-pdf')
const ejs = require('ejs')

let nomeDoUsuario = "Pedro"
let curso = "Formação React"

ejs.renderFile('./index.ejs', {nome: nomeDoUsuario, curso: curso}, (erro, html) => {
    if (erro) {
        console.log('Erro!')
    } else {
        pdf.create(html, {}).toFile('./meuPdf.pdf', (erro, res) => {
            if (erro) {
                console.log('Erro!')
            } else {
                console.log(res)
            }
        })
    }
})