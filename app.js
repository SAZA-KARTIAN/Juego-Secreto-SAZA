let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (isNaN(numeroDeUsuario)) {
        asignarTextoElemento("p", "Por favor, ingresa un número válido.");
        limpiarCaja();
        return;
    }

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(
            "p",
            `¡Felicidades! Has adivinado el número secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`
        );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor.");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor.");
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento("p", "Ya no hay más números para sortear.");
        return null;
    }
    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado));
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica el número secreto entre 1 al ${numeroMaximo}`);
    listaNumerosSorteados = [];
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    listaNumerosSorteados = [];
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
  