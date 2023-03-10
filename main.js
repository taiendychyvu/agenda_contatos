const form = document.getElementById('form-id');
let linhas = ''
const telSalvo = []; 
const inputNome = document.getElementById('nome-id');
const inputSobrenome = document.getElementById(`sobrenome-id`);
const inputDDD = document.getElementById(`tel-ddd`)
const inputTel = document.getElementById(`tel-id`);
//const foneForm = document.querySelector(`.fone-form`)


form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    calculaContatos();
});

//criando a função que vai ser responsavel por adicionar linhas no html
function adicionaLinha() {

console.log(inputNome.value + inputSobrenome.value + inputTel.value.length)

    if (telSalvo.includes(inputTel.value)){
        alert(`O numero ${inputTel.value} já esta salvo`);
    } else {
        telSalvo.push(inputTel.value);
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputSobrenome.value}</td>`;
        linha += `<td>(${inputDDD.value}) ${inputTel.value}</td>`; 
        linha += `</tr>`;
        linhas += linha;
    }

    //agora vamos limpar os campos para por novos conteudos no formulario
    inputNome.value = ``;
    inputSobrenome.value = ``;
    inputDDD.value = ``;
    inputTel.value = ``;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}

function calculaContatos() {
    const mostraTotal = document.getElementById(`total-contatos`)
    mostraTotal.innerHTML = `Total = ${telSalvo.length}`

}

function maskPhone () { //Serve para adicionar o - apos os primeiros 5digitos do telefone
    console.log(inputTel.value.length)
    if (inputTel.value.length == 5){
        inputTel.value += `-`
    } 

}