require(`colors`)

const functions = require('./proy_modules/functions.js');

const contador = -1;
const main = async() => {
    console.clear()

    const numero = 10;
    functions.interfazSigno(numero);

    const caracter = "z";
    functions.interfazEncontroCaracter(caracter);

    const bebida = "Cocacola";
    functions.interfazBusquedaBebida(bebida);

    const medio = "avion";
    functions.interfazMedioTranspote(medio);

    const cantidad = 2;
    const precio = 600;
    const descuento = 50;
    functions.interfazCalcularPrecioVenta(cantidad, precio, descuento);

    const comida = "carne";
    functions.interfazBebidaComida(comida);

    const pago = 5000;
    functions.interfazSalaJuegos(pago);

    const numero2 = 10;
    functions.interfazContarNumero(numero2);

    const numeroPar = 0;
    functions.interfazCNumerosPares(numeroPar);

    const tablas = 10;
    functions.interfazTablaMultiplicar(tablas);

    const numRepCarct = 12;
    const Caracter = "A";
    functions.interfazRepetirCaracter(Caracter,numRepCarct);

    const baseNum = 5;
    functions.interfazContadorBase(baseNum)
}

main();