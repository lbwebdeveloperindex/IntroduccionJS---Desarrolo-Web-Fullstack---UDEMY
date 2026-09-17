// CLASES

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} vale $${this.precio}`;
    }
}

const producto1 = new Producto("Monitor", 800);

console.log(producto1);

// Herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro("JavaScript", 120, 4345435345345);
console.log(libro.formatearProducto());