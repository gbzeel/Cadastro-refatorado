import { urlCrud } from "../script.js";

export const elemento = (id) => document.getElementById(id);

export const cadastrar = (elementoJson) => {
    const item = document.createElement('li');
    const btn = document.createElement("button");

    item.innerText = `Nome: ${elementoJson.cliente}, email: ${elementoJson.endereco}`;
    btn.innerText = "X";
    btn.classList.add('btnTarefa');
    btn.id = `${elementoJson._id}`

    btn.addEventListener('click', () => {
        fetch(`${urlCrud}/clientes/${elementoJson._id}`, {
            method: 'DELETE',
        })
        btn.parentElement.remove();
    });
    item.appendChild(btn);
    elemento("listaDeCadastro").appendChild(item);
}