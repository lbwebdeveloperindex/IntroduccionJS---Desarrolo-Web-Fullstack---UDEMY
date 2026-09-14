// SWITCH

const metodoPago = "tarjeta";

switch(metodoPago) {
    case"tarjeta":
        console.log("Pago con tarjeta");
        break;
    case"cheque":
        console.log("Pago con cheque");
        break;
    case"efectivo":
        console.log("Pago con efectivo");
        break;
    default :
        console.log("Método de pago no válido");
        break;
}