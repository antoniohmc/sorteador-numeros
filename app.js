function sortear() {
    // Obtém o valor inserido no campo de entrada "quantidade" e converte para número inteiro
    let quantidade = parseInt(document.getElementById("quantidade").value);
    // Obtém o valor inserido no campo de entrada "de" e converte para número inteiro
    let de = parseInt(document.getElementById("de").value);
    // Obtém o valor inserido no campo de entrada "ate" e converte para número inteiro
    let ate = parseInt(document.getElementById("ate").value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    // Array para armazenar os números sorteados
    let sorteados = [];
    let numero;

    // Laço para sortear os números
    for (let i = 0; i < quantidade; i++) {
        // Gera um número aleatório entre 'de' e 'ate'
        numero = obterNumeroAleatorio(de, ate);

        // Garante que o número sorteado ainda não foi sorteado antes
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        // Adiciona o número sorteado ao array de sorteados
        sorteados.push(numero);
    }

    // Atualiza o conteúdo do elemento com id "resultado" para mostrar os números sorteados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    // Altera o status do botão
    alterarStatusBotao();
}

// Função para gerar um número aleatório entre min e max
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + 1;
}

// Função para alterar o status do botão
function alterarStatusBotao() {
    // Obtém o botão com id "btn-reiniciar"
    let botao = document.getElementById("btn-reiniciar");
    // Verifica se o botão possui a classe "container__botao-desabilitado"
    if (botao.classList.contains("container__botao-desabilitado")) {
        // Remove a classe "container__botao-desabilitado" e adiciona a classe "container__botao"
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        // Remove a classe "container__botao" e adiciona a classe "container__botao-desabilitado"
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

// Função para reiniciar os valores dos campos de entrada
function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("de").value = "";
    document.getElementById("resultado").innerHTML = "Números sorteados:  nenhum até agora";
    alterarStatusBotao();
}