

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  return x > y ? x : y;

}

console.log(obtenerMayor(2, 3));
console.log(obtenerMayor(2, -3));
console.log(obtenerMayor(3, 3));
console.log(obtenerMayor(12, 3));

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

  return edad >= 18 ? "Allowed" : "Not allowed";

}

console.log(mayoriaDeEdad(3));
console.log(mayoriaDeEdad(33));
console.log(mayoriaDeEdad(-3));

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  return status === 1 ? "Online" : status === 2 ? "Away" : "Offline";
}
console.log(conection(1));
console.log(conection(2));
console.log(conection(-12));

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  return idioma === "alemán" ? "Guten Tag!"
    : idioma === "mandarín" ? "Ni Hao!"
      : idioma === "inglés" ? "Hello!"
        : "¡Hola!"
}

console.log(saludo("alemán"));
console.log(saludo("mandarín"));
console.log(saludo("inglés"));
console.log(saludo("espanglish"));

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case "blue":
      console.log("This is blue");
      break;
    case "red":
      console.log("This is red");
      break;
    case "green":
      console.log("This is green");
      break;
    case "orange":
      console.log("This is orange");
      break;
    default:
      console.log("Color not found");
  }
}

colors("blue");
colors("red");
colors("green");
colors("orange");
colors("black");

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero === 10 || numero === 5;
}

console.log(esDiezOCinco(5));
console.log(esDiezOCinco(15));
console.log(esDiezOCinco(10));
console.log(esDiezOCinco(30 / 6));

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero < 50 && numero > 20;
}

console.log(estaEnRango(33));
console.log(estaEnRango(3));
console.log(estaEnRango(13));
console.log(estaEnRango(55));
console.log(estaEnRango(49.9999999));

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return Math.floor(numero) === numero;
}

console.log(esEntero(5));
console.log(esEntero(-5));
console.log(esEntero(5.3));
console.log(esEntero(5 / 3));

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let respuesta = ""
  if (numero % 3 === 0) { respuesta += "fizz" };
  if (numero % 5 === 0) { respuesta += "buzz" };
  if (respuesta === "") { respuesta = numero };
  return respuesta;
}

console.log(fizzBuzz(1));
console.log(fizzBuzz(33));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(-150));


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  return num1 * num2 * num3 === 0 ? "Error" :
    num1 < 0 || num2 < 0 || num3 < 0 ? "Hay negativos" :
      num1 > num2 && num1 > num3 && num1 > 0 ? "Número 1 es mayor y positivo" :
        num3 > num1 && num3 > num2 ? ++num3 : false;
}

console.log(operadoresLogicos(0, 2, 3));
console.log(operadoresLogicos(10, 0, 3));
console.log(operadoresLogicos(10, 2, 3));
console.log(operadoresLogicos(110, 12, 3));
console.log(operadoresLogicos(3, -2, 3));
console.log(operadoresLogicos(10, -2, 3));
console.log(operadoresLogicos(10, 2, 31));
console.log(operadoresLogicos(1, 22, 3));

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero > 2 && numero % 2 !== 0 && Math.floor(numero) === numero) {
    for (let i = 3; i < numero; i = i + 2) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(esPrimo(12));
console.log(esPrimo(11));
console.log(esPrimo(10));
console.log(esPrimo(0));
console.log(esPrimo(-1));
console.log(esPrimo(2));
console.log(esPrimo(9));
console.log(esPrimo(1));
console.log(esPrimo(3.5));
console.log(esPrimo(104729));

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor ? "Soy verdadero" : "Soy falso";

}

console.log(esVerdadero(false));
console.log(esVerdadero(1));
console.log(esVerdadero(true));
console.log(esVerdadero(0));
console.log(esVerdadero(esPrimo(104729)));

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí 
  let resultados = [];
  for (let i = 0; i <= 10; i++) {
    resultados.push(i * 6);
  }
  return resultados;
}

console.log(tablaDelSeis());

function tieneTresDigitos(numero) {
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  return numero > 99 && numero < 1000;
}

console.log(tieneTresDigitos(33));
console.log(tieneTresDigitos(332));
console.log(tieneTresDigitos(3322));
console.log(tieneTresDigitos(100));

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0;
  do {
    i++;
    numero += 5;
  } while (i < 8);
  return numero;
}

console.log(doWhile(-2));
console.log(doWhile(2));
console.log(doWhile(21.4));


