
// se crea un archivo js en src: src/helpers.js
// funciones que se pueden reutilizar
// así evitamos cargar los componentes con mucho código
// se coloca un export, así se puede importar luego
// en Formulario.js se importa la función de calcularTotal

// realizar la cotización

// función que toma cantidad y plazo
// se exporta
export function calcularTotal(cantidad, plazo) {
    // cantidades
    // 0 - 1000 = 25% (si el usuario pide de 0 a 1000, el interés es del 25% de lo que está pidiendo)
    // 1001 - 5000 = 20%
    // 5001 - 100000 = 15%
    // +10000 = 10%

    // se crea la variable de totalCantidad
    let totalCantidad;

    if (cantidad <= 1000) {
        totalCantidad = cantidad *0.25;
    } else if (cantidad >= 1001 && cantidad <= 5000 ) {
        totalCantidad = cantidad *0.2;
    } else  if (cantidad >= 5001 && cantidad <= 10000 ) {
        totalCantidad = cantidad *0.15;
    } else {
        totalCantidad = cantidad *0.10;
    }
    console.log(totalCantidad)



    // Calcular el plazo

    // reglas:
    // 3 = 5%    6 = 10%     12 = 15%     24 = 20%

    let totalPlazo = 0;

    // la condición que se revisa es el plazo
    switch ( plazo ) {
        case 3:
            totalPlazo = cantidad * 0.5;
            break;
        case 6:
            totalPlazo = cantidad * 0.1;
            break;
        case 12:
            totalPlazo = cantidad * 0.15;
            break;
        case 24:
            totalPlazo = cantidad * 0.2;
            break;
        default:
            break;
    }
    console.log(totalPlazo)
    return totalPlazo + totalCantidad + cantidad;
}





















