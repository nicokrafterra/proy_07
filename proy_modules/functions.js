const functions = {}

const signo = (numero) => {
    if (numero > -1) {
        return 'positivo'.green
    } else {
        return 'negativo'.red
    }
}

const encontrarCaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return 'Se encontro'.green;
    } else {
        return 'No se encontro'.red;
    }
}

const interfazSigno = (numero) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `        FUNCION SIGNO           `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `    El Numero ${numero} es   `.cyan + functions.signo(numero) + `  //`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const interfazEncontroCaracter = (caracter) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `    FUNCION ENCONTRO CARACTER   `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`// `.blue + `El CARACTER ${caracter.toUpperCase()} es `.cyan + functions.encontrarCaracter(caracter.toUpperCase()) + `//`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const busquedaBebida = (bebida) => {
    const bebidas = ['Vino', 'Cerveza', 'Gaseosa', 'Agua']
    if (bebidas.includes(bebida)) {
        return 'ir a la barra'.cyan
    } else {
        return 'ir a la tienda'.cyan
    }
}

const interfazBusquedaBebida = (bebida) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `      FUNCION BUSCAR BEBIDA     `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `Para beber ${bebida} tienes que `.cyan + functions.busquedaBebida(bebida) + `//`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const medioTransporte = (medio) => {
    switch (medio) {
        case "avion":
        case "barco":
            return "Recuerda tener dinero para el pasaje".cyan;
            break;
        case "carro":
        case "bicicleta":
            return "Recuerda llevar la ropa apropiada".cyan;
            break;
        default:
            return "Medio de transporte no reconocido".cyan;
            break;
    }
}

const interfazMedioTranspote = (medio) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `      FUNCION MEDIOS     `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `${medio}: `.cyan + functions.medioTransporte(medio) + `//`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const calcularPrecioVenta = (cantidad, precio, descuento) => {
    switch (true) {
        case precio <= 0:
        case cantidad < 0:
        case descuento > 100:
            return "Error: valores invalidos".cyan;
            break;
        default:
            const precioTotal = precio * cantidad;
            const descuento_total = (precioTotal * descuento) / 100;
            const precioVenta = precioTotal - descuento_total;
            return precioVenta;
            break;
    }
};

const interfazCalcularPrecioVenta = (cantidad, precio, descuento) => {
    const precioTotal = precio * cantidad;
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `      FUNCION FACTURA     `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `   precio por unidad: ${precio}       `.cyan + `//`.blue)
    console.log(`//`.blue + `   la cantidad de producto es: ${cantidad}`.cyan + `//`.blue)
    console.log(`//`.blue + `   precio de venta es: ${precioTotal}     `.cyan + `//`.blue)
    console.log('//'.blue + '   el precio final es: '.cyan + functions.calcularPrecioVenta(cantidad, precio, descuento) + '      //'.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const bebidaComida = (menu) => {
    switch (menu) {
        case "carne":
            return "Vino tinto".cyan;
            break;
        case "pescado":
            return "Vino blanco".cyan;
            break;
        case "verdura".cyan:
            return "Agua".cyan;
            break;
        default:
            return "Agua".cyan;
            break;
    }
}

const interfazBebidaComida = (menu) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `       FUNCION MENU COMIDAS     `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `Es recomendable aompañar El/La ${menu} con: `.cyan + functions.bebidaComida(menu) + `//`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const salaJuegos = (pago) => {
    if (pago > 4000) {
        return "tienes acceso a todos los juegos".cyan;
    } else if (pago === 4000) {
        return "tienes acceso a todos los juegos:Consolas, Juegos 2D, Juegos 3D, Realidad Virtual".cyan;
    } else if (pago === 3000) {
        return "tienes acceso a los juegos: Consolas, Juegos 2D, Juegos 3D".cyan;
    } else if (pago === 2000) {
        return "tienes acceso a las Consolas y Juegos 2D".cyan;
    } else if (pago === 1000) {
        return "tienes acceso a las: Consolas".cyan;
    } else {
        return "no te alcanza inserta mas dinero".cyan;
    }
};

const interfazSalaJuegos = (pago) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `    FUNCION SALA DE JUEGOS    `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `con ${pago} pesos `.cyan + functions.salaJuegos(pago) + `//`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const contarNumero = (numero) => {
    if (numero <= 0) {
        return "EL numero debe ser mayor a 0".cyan;
    }

    let resultado = "";
    for (let i = 1; i <= numero; i++) {
        resultado += i + " ";
    }

    return resultado
}

const interfazContarNumero = (numero) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `        FUNCION CONTADOR        `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + functions.contarNumero(numero) + `//`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const cNumerosPares = (numero) => {
    if (numero < 0) {
        return "el numero no debe der negativo.";
    }

    let resultado = "";
    for (let i = 0; i <= numero; i += 2) {
        resultado += i + " ";
    }

    return resultado
}

const interfazCNumerosPares = (numero) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `        FUNCION CONTADOR PARES    `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + functions.cNumerosPares(numero) + `//`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}

const tablaMultiplicar = numero => {
    console.log(`Tabla de multiplicar del ${numero}:`.cyan);
    for (let num = 1; num <= 10; num++) {
        const resultado = numero * num;
        console.log(`${numero}`.cyan + ` x`.green + ` ${num}`.cyan + ` =`.green + ` ${resultado}`.cyan);
    }
};

const interfazTablaMultiplicar = numero => {
    functions.tablaMultiplicar(numero)
}

const repetirCaracter = (caracter, numero) => {
    if (typeof caracter !== 'string' || caracter.length !== 1) {
        throw new Error('El primer argumento debe ser un único carácter.');
    }

    if (typeof numero !== 'number' || numero < 0 || !Number.isInteger(numero)) {
        throw new Error('El segundo argumento debe ser un número entero no negativo.');
    }

    return caracter.repeat(numero);
};

const interfazRepetirCaracter = (caracter, numero) => {
    functions.repetirCaracter(caracter, numero)
}

const contadorBase = (base) => {
    if (base < 2 || base > 36) {
        return [];
    }

    const numeros = [];
    for (let primerDigito = 0; primerDigito < base; primerDigito++) {
        for (let segundoDigito = 0; segundoDigito < base; segundoDigito++) {
            const numeroEnBaseN = primerDigito * base + segundoDigito;
            numeros.push(numeroEnBaseN);
        }
    }

    return numeros;
};

const interfazContadorBase = (base) => {
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + `        FUNCION CONTADOR BASe    `.yellow + `//`.blue)
    console.log(`////////////////////////////////////`.blue)
    console.log(`//`.blue + functions.contadorBase(base) + `//`.blue)
    console.log(`////////////////////////////////////\n`.blue)
}


functions.interfazContadorBase = interfazContadorBase
functions.contadorBase = contadorBase
functions.interfazRepetirCaracter = interfazRepetirCaracter;
functions.repetirCaracter = repetirCaracter;
functions.interfazTablaMultiplicar = interfazTablaMultiplicar;
functions.tablaMultiplicar = tablaMultiplicar;
functions.interfazCNumerosPares = interfazCNumerosPares
functions.cNumerosPares = cNumerosPares
functions.interfazContarNumero = interfazContarNumero;
functions.contarNumero = contarNumero
functions.salaJuegos = salaJuegos;
functions.interfazSalaJuegos = interfazSalaJuegos
functions.interfazBebidaComida = interfazBebidaComida;
functions.bebidaComida = bebidaComida;
functions.interfazCalcularPrecioVenta = interfazCalcularPrecioVenta;
functions.calcularPrecioVenta = calcularPrecioVenta
functions.interfazMedioTranspote = interfazMedioTranspote;
functions.medioTransporte = medioTransporte;
functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontrarCaracter = encontrarCaracter
functions.interfazEncontroCaracter = interfazEncontroCaracter
functions.busquedaBebida = busquedaBebida;
functions.interfazBusquedaBebida = interfazBusquedaBebida;

module.exports = functions;