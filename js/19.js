// FUNCIONES QUE RETORNAN VALORES

function sumar(n1, n2) {
    return n1 + n2;
}
let resultado = sumar(2, 4);
console.log(resultado);

let totalCompra = 0;

function agregarProducto(precioItem) {
    return totalCompra += precioItem;
}

function agregarImpuesto(totalCompra) {
    return totalCompra * 1.15;
}

totalCompra = agregarProducto(200);
totalCompra = agregarProducto(400);
totalCompra = agregarProducto(600);

console.log(totalCompra);

let precioFinal = agregarImpuesto(totalCompra);

console.log(`Total a pagar: $${precioFinal}`);