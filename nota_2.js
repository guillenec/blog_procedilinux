var numero1 = 10; //declaramos e inicializamos una variable
var numero2 = 20;

var resultado = numero1 + numero2;

//tipos

var enteros = 123; //numeros enteros
var flotantes = 123.12; //float 

var texto = "cadena de texto"; //String

//INTERACCION CON ELNAVEGADOR
nombre = prompt ("ingrese nombre"); //me permite solicitarle al usuario el ingreso de dato para asignarlo a la vaiable
apellido = prompt ("ingrese apellido");

estado = confirm("¿Esta listo?"); //comoalert pero para confirmar

if (estado) {
    let saludo="Hola "+nombre+" "+apellido+ " Bienvenido a JavaScript. \n";
    alert (saludo);
    console.log(saludo); //me permite visualizar en consola
    document.write(saludo); //muestra el contenido en el documento html 
}

//Buenas Practicas
//el estilo de escritura debe ser claro, tabular.
document.writeln( prompt("¿le gusta aprender?") );
document.writeln(" Le gusta aprender...");
alert(" muchas gracias");

//esto es un comentario explicativo
/*
    esta esotra forma de comentar, para comentarios mas extensos
*/



