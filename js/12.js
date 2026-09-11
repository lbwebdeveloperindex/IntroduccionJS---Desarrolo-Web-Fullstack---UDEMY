"use strict"; //JS en modo estricto
//OBJETOS

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

Object.freeze(producto); //No se pueden agregar/eliminar propiedades, ni modificar valores
producto.imgen = 'imagen.jpg'; //Da error cuando se aplica a un objeto que se le aplicó metodo .freeze al usar "use strict";
producto.precio = 10; // No funciona
Object.isFrozen(producto); // Indica si se le aplicó .freexe a un objeto

Object.seal(producto); //No se pueden agregar/eliminar propiedades, si modificar valores
producto.imgen = 'imagen.jpg'; //Da error cuando se aplica a un objeto que se le aplicó metodo .seal al usar "use strict";
producto.precio = 10; // Funciona
Object.isSealed(producto); // Indica si se le aplicó .seal a un objeto

console.log(producto);