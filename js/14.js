// ARREGLOS

const numeros = [10, 20, 30, 40, 50];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.log(numeros);
console.table(numeros);

// Acceder a los valores
console.log(numeros[3]);

//Ectensión de un arreglo
console.log(meses.length);

numeros.forEach( function(numero){
    console.log(numero);
});

numeros[5] = 60;

numeros.push(70, 80, 90) //Agrega el elemento al final del arreglo
numeros.unshift(-10, -20, -30) //Agrega el elemento al inicio del arreglo

meses.pop(); //Elimina el último elemento del arreglo
meses.shift(); //Elimina el primer elemento del arreglo

meses.splice(2, 1); // Elimina los elementos indicados según la primer variable, inidca inidice desde donde empezar a eliminar y la segunda variable, indica cuantos elementos eliminar

// REST OPERATOR / SPREAD OPERATOR
const nuevoArreglo = [...meses, 'Junio']; //Crea un nuevo arrreglo con el contenido de meses y los elementos agregados
const nuevoArreglo1 = ['Junio', ...meses]; //Crea un nuevo arrreglo con el contenido de meses y los elementos agregados (Al principio)