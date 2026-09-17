// PROMISES

const usuarioAutenticado = new Promise(function(resolve, reject) {
    const auth = true;

    if(auth) {
        resolve("Usuaurio Autenticado"); //El promise se cumple, devuelve un resultado (Lo que está dentro del parentesis)
    }
    else {
        reject("No se pudo iniciar sesión"); //El promise no se cumple
    }
});

usuarioAutenticado
    .then( function(resultado) { //.then - Caso positivo
        console.log(resultado);
    })
    .catch(function(error) {
        console.log(error);
    }) // .chatch - Caso negativo

// En los promises existen 3 valores

// Pending : No se cumplió, pero tampoco se rechazó
// Fulfilled : Se cumplió
// Rejected : Se rechazó