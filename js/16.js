// FUNCIONES

// Declaración

function nombre(argumento1, argumento2) {
    // Procedimiento
}

function sumar() {
    console.log(10 + 10);
} // SE PUEDE LLAMAR LA FUNCIÓN Y LUEGO DECLARARLA

// Llammado de función 
sumar();

// Expresión de la función
const sumar2 = function() {
    console.log(3 + 3);
} // SE DEBE DECLARAR LA FUNCIÓN Y LUEGO LLAMARLA

sumar2();

// IIFE
(function(){
    console.log("Función IIFE");
})(); //FUNCIÓN QUE SE LLAMA A SÍ MISMA