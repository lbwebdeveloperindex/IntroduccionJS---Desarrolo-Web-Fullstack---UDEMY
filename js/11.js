//OBJETOS

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

// DESTRUCTURING
const {disponible, precio} = producto; //TIENE QUE SER EL MISMO NOMBRE DE LA PROPIEDAD

console.log(disponible);
console.log(precio);