// ESTRUCTURAS DE CONTROL

const puntaje = 100;

if(puntaje === 100) {
    console.log("100");
}
else {
    console.log("!== 100");
}

const efectivo = 1000;
const pagar = 800;

if(efectivo >= pagar) {
    console.log("Saaldo suficiente");
}
else {
    console.log("Saldo insuficiente");
}

const rol = "ADMINISTRADOR";

if(rol === "ADMINISTRADOR") { 
    console.log("ADMINISTRADOR"); 
}
else if(rol === "EDITOR") { 
    console.log("EDITOR");
}
else { 
    console.log("USUARIO");
}
