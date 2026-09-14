//THIS

const reservacion = {
    nombre: 'Lucas',
    apellido: 'Bergara',
    total: 300,
    pago: false,
    informacion : function() {
        console.log(`El cliente ${this.nombre} reservó por un total de ${this.total}`);
    }
}

reservacion.informacion();