//la funcion prompt retorna datos 
let nombre = prompt("Cual es tu nombre")
console.log(nombre)


//alert no retorna datos
let retorno = alert("Hola")
console.log(retorno)


//funciones que no retornan datos
function saludar(){
    console.log("Hola a todos")
}
saludar()

//funcion que retorna datos
function sumar(n1, n2){
    return n1 + n2
}
let resultado = sumar (10, 20)
console.log(resultado)

//Práctica
let nombreAlumno = prompt("Ingrese su nombre")
let notaAlumno = parseInt(prompt("Ingrese su nota"))

function devolverNota(alumno, nota){
    return "El alumno " + alumno + " tiene una nota de " + nota;
}

let devolucion = devolverNota(nombreAlumno, notaAlumno);
alert(devolucion)

//------------


