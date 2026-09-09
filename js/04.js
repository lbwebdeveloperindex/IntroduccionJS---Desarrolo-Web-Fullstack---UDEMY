// TIPOS DE DATOS - STRING

const producto = "Monitor 20\"";
const productoA = String("Monitor 30 pulgadas");
const productoB = new String("Monitor 50 pulgadas"); // OBJETO
const producto2 = "Monitor HD";
const tweet = "Aprendiendo JavaScript" ;


console.log(producto);
console.log(typeof(productoA));
console.log(typeof(productoB));
console.log(productoB.length); // Propiedad para verificar el largo del string

console.log(tweet.indexOf('JavaScript')); // Método indexOf Retorna la posición en la que comienza la palabra, -1 indica que no existe

console.log(tweet.includes('Hola')); // Método includes retorna si eciste la palabra en el string (true / false)