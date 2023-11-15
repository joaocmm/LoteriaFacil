//declaração de constantes contidas no HTML

const btnSorteio = document.querySelector(".btn-sorteio");
const listaCompleta = document.querySelector(".lista-completa");
const btnApostar = document.querySelector(".btn-apostar");
const btnLimpar = document.querySelector(".btn-limpar");

// Declaração dos Arrays (vetores)
const numsSorteados = [];
const numsApostados = [];
const numsCertos = [];

btnSorteio.addEventListener("click", sorteio);
btnSorteio.disabled = true;
btnApostar.addEventListener("click", gerarAposta);
btnApostar.disabled = true;
btnLimpar.addEventListener("click", recarregar);

// função para gerar número aleatório
function getNumber(min, max) {
    return Math.random() * (max - min) + min;
}


// Função para inserir valores no array de números sorteados. 
function sortearNumeros() {
    for (let i = 0; i < 6; i++) {
        var numero = Math.floor(getNumber(1, 25));
        if (!numsSorteados.includes(numero)) {
            numsSorteados.push(numero);
        }
        console.log(numsSorteados);
    }
    mostrarSorteados();
    btnSorteio.disabled = true;
}

// Função para printar na tela os números sorteados.
function mostrarSorteados() {
    let novaLi = '';
    numsSorteados.forEach(num => {
        novaLi = novaLi + `<li class="lista-sorteados">${num}</li>`
    });
    listaCompleta.innerHTML = novaLi;
    //console.log(num);
}

// Função para efetivar o sorteio dos números. 
function sorteio() {
    sortearNumeros();
    mostrarSorteados();
    btnApostar.disabled = false;
}

// Função para selecionar os numeros e inserir no Array de apostas
function selecionarNumeros(numero) {
    if (numsApostados.length >= 0 && numsApostados.length <= 5) {
        numsApostados.push(numero);
        desabilitarNumEscolhido(numero);
    }
    btnSorteio.disabled = false;
    console.log(numsApostados);
}

// Função para desabilitar o número selecionado na tela de apostas.
function desabilitarNumEscolhido(numero) {
    document.getElementById("btn-" + numero).disabled = true;
}

//Função para comparar arrays
function apurarResultado() {
    var acertos = 0;
    for (i = 0; i <= numsSorteados.length; i++) {
        if (numsSorteados.includes(numsApostados[i])) {
            acertos++;
            numsCertos.push(numsApostados[i]);
        }
    }
    return acertos;
}

// Função para gerar o resultado e apresentar acertos na tela.
function gerarAposta() {
    var acertos = apurarResultado();
    document.querySelector(".numero-acertos").innerHTML = `Total de Acertos: ${acertos}`;
    document.querySelector(".acertados").innerHTML = `Números Acertados: ${numsCertos}`;
    btnApostar.disabled = true;
}

// Função para limpar a tela.
function recarregar() {
    window.location.reload(true);
}
