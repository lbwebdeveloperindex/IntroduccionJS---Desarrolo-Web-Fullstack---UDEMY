// MÉTODOS DE PROPIEDAD

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo la canción: ${id}`);
    },
    pausar : function() {
        console.log('Pausando');
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando playlist: ${nombre}`);
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`);
}

reproductor.reproducir(432);
reproductor.borrarCancion(32);
reproductor.crearPlaylist("Rock");