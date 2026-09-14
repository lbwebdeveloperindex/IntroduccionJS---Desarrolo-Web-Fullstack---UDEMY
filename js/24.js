// ITERADORES

// FOR LOOP
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log(`El número ${i} es par`);
    }
    else {
        console.log(`El número ${i} es impar`);
    }
}

const carrito = [
    { nombre: "Monito 20 pulgadas", precio: 500 },
    { nombre: "Televisión 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// WHILE LOOP
let l = 0;

while(l < 10) {
    if(l % 2 === 0) {
        console.log(`El número ${l} es par`);
    }

    console.log(l);
    l++;
}

// DO WHILE LOOP
let j = 0;

do {
    if(j % 2 === 0) {
        console.log(`El número ${j} es par`);
    }
    else {
        console.log(`El número ${j} es impar`);
    }
} while(j < 100)