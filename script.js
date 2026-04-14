// variável para armazenar o total
let total = 0;

// seleciona onde o total será exibido
const totalElemento = document.getElementById("total");

// seleciona todos os botões
const botoes = document.querySelectorAll(".btn");

// percorre todos os botões
botoes.forEach((botao) => {

    // adiciona evento de clique
    botao.addEventListener("click", () => {

        // pega o preço dentro do card
        const precoTexto = botao.parentElement.querySelector(".preco").textContent;

        // converte para número
        const preco = parseFloat(precoTexto);

        // soma no total
        total += preco;

        // atualiza na tela
        totalElemento.textContent = total.toFixed(2);

    });

});