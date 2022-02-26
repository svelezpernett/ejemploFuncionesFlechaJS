//Funcion tradidional para calcular la distancia entre dos puntos:
// function calcularDistancia(x1, y1, x2, y2){

//     return resultadoFinal = Math.sqrt(Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2)));
// }

// //Llamado a la funcion

// let distancia = calcularDistancia(0, 0, -10, -10);

// console.log(`Distancia calculada es ${distancia.toFixed(2)}`)


//FUNCION DE FLECHA
let calcularDistancia = (x1, y1, x2, y2) => resultadoFinal = Math.sqrt(Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2)));


//Llamado a la funcion

let distancia = calcularDistancia(0, 0, -10, -10);

console.log(`Distancia calculada es ${distancia.toFixed(2)}`)