//ARRAY METHODS
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
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }}
);

// Includes
const resultado = meses.includes('Marzo');
let resultado2 = carrito.includes('Celular'); // No funciona con arreglos no planos

// Some
resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Celular';
});

// Reduce
resultado2 = carrito.reduce(function(total, elementoActual){
    return total + elementoActual.precio;
}, 0); //Se indica como valor inicial 0

// Filter
resultado2 = carrito.filter(function(producto){
    return producto.precio > 400;
});

console.log(resultado2);