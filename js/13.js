// UNIR OBJETOS

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

// Buena práctica es no modificar los datos originales

const nuevoProducto = {...producto, ...medidas};