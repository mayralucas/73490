
let retorno = alert("Hola")
console.log(retorno)


let nombreCliente = prompt("Ingrese su nombre")

function devolverSaludo(cliente) {
    return "Bienvenido " + cliente + " que deseas comprar hoy?";
}

let devolucion = devolverSaludo(nombreCliente);
alert(devolucion)


