//  Async - Await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando clientes...");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log("Descargando pedidos...");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados");
        }, 3000);
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes(); // Await indica que debn esperar los demás procesos a que este finalice para ejecutarse
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); // Permite que ambos procesos se ejecuten al mismo tiempo
        console.log(resultado[0],"\n",resultado[1])
    }
    catch {
        console.log(error)
    }
}

app(); //Al ser asincrona la función App, permite que los demás procesos fuera de la misma se efecúten

console.log("Este código no se bloquea");