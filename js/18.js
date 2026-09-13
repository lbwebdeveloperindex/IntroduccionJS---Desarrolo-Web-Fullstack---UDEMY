function sumar(numero1, numero2) { // numero1 y numero2 son parámetros
    console.log(numero1 + numero2);
}
sumar(10, 11); // Se pasan argumentos (Importa el orden)

const sumar2 = function(n1 = 0, n2 = 0) { // Se le indican parámetros por default, en caso de que no se inserte uno de los valores, permite ejecutar la función
    console.log(n1 + n2);
}
sumar2(5);