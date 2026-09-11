// ORDEN DE OPERACIONES

let resultado;

resultado = (20 + 30) * 2;
resultado = 20 + 30 * 2;
resultado = (600 + 600) * 1.05;

console.log(resultado);

// INCREMENTOS

let puntaje = 10;
puntaje++; //11

console.log(puntaje); //Muestra 11, Valor real: 11
// Distinto de:
console.log(puntaje++); //Muestra 11, Valor real: 12 - Primero muestra el valor, después incrementa
// Distinto de:
console.log(++puntaje); //Muestra 13, Valor real: 13 - Primero incrementa, después muestra el valor 

puntaje+= 100 //Suma de 100 a puntaje

console.log(puntaje);