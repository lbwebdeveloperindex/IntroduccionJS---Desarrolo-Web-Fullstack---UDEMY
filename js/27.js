// POO

//Object Literal
const producto = {
    nombre: "Tablet",
    precio: 500
}

//Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto("Monitor", 800);

function formatearProducto(producto) {
    return `El producto ${producto.nombre} vale $${producto.precio}`;
}

console.log(producto);

console.log(formatearProducto(producto2));

// PROTOTYPE - Permite crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} vale $${this.precio}`;
}

console.log(producto2.formatearProducto()); 