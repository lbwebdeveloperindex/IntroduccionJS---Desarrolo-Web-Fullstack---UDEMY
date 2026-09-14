// FOREACH MAP - Solo en arreglos
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

// ForEach
carrito.forEach(function(producto) {
    console.log(producto.precio);
});

//MAP
carrito.map(function(producto) {
    console.log(producto.precio);
});

//Para mostrar cosas foreach, para crear nuevo arreglo map