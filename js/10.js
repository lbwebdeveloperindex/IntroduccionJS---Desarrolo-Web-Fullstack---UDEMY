// OBJETOS

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);
console.log(producto.disponible); // ACCEDER A UNA PROPIEDAD DEL OBJETO
console.log(producto["precio"]); // ACCEDER A UNA PROPIEDAD DEL OBJETO

// AGREGAR PROPIEDAD
producto.image = 'imagen.jpg'
console.log(producto);

// ELIMINAR PROPIEDAD
delete producto.disponible
console.log(producto);