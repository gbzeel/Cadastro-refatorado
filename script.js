import { elemento, cadastrar, urlCrud } from "../utius.js";

//variaveis da página

fetch(`${urlCrud}/clientes`)
    .then(x => x.json())
    .then((cadastro) => {
        cadastro.forEach(element => {
            cadastrar(element);
        });
    })


elemento("botao").addEventListener('click', () => {
    fetch(`${urlCrud}/clientes`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({ cliente: elemento("nome").value, endereco: elemento("email").value })
    })
        .then(x => x.json())
        .then((element) => {
            cadastrar(element);
        })
})
