// ARROW FUNCTIONS - Solo se usa en expresión de función

const sumar = function(n1, n2) {
    console.log(n1 + n2);
}
sumar(5, 10);

// Se elimina "function", posterior al parentesis se indica "=>", si es una sola linea se eliminan las llaves ( { } )

const sumarArrow = (n1, n2) => console.log(n1 + n2);
sumarArrow(2, 20);
/* SINTAXIS BÁSICA
    const nombreFuncion = (parametro1, parametro2) => {
        
    }
*/
const aprendiendo = parametro => console.log(`Aprendiendo ${parametro}`);
aprendiendo('JavaScript');

//APLICANDO A ARRAY METHODS
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: "Monito 20 pulgadas", precio: 500 },
    { nombre: "Televisión 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];

// forEach
meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }}
);

// Includes
const resultado = meses.includes('Marzo');
let resultado2 = carrito.includes('Celular'); // No funciona con arreglos no planos

// Some
resultado2 = carrito.some( producto => producto.nombre === 'Celular');

// Reduce
resultado2 = carrito.reduce( (total, elementoActual) => total + elementoActual.precio, 0); //Se indica como valor inicial 0

// Filter
resultado2 = carrito.filter(producto => producto.precio > 400);

console.log(resultado2);