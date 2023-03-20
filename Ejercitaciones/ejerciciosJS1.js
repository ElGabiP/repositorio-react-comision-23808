/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */


// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Gabriel";
console.log(typeof ((nuevaString)));
console.log(nuevaString.length)

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 43;
console.log(typeof ((nuevoNum)));

// Crea una variable booleana:
const nuevoBool = true;
console.log(typeof ((nuevoBool)));

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;
console.log(nuevaResta);

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;
console.log(nuevaMultiplicacion);

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
console.log(nuevoModulo);


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return console.log(str)
}

devolverString("Cadena de texto")


function suma(x, y) {
  return x + y
}
console.log(suma(4, 7));
console.log(suma(4.6, 7.54));
console.log(suma(-4, 7));


function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return y - x;
}
console.log(resta(4, 7));
console.log(resta(4.2, 7.5));
console.log(resta(-4, 7));


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}
console.log(multiplica(4, 7));
console.log(multiplica(4.2, 7.5));
console.log(multiplica(-4, 7));

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}
console.log(divide(14, 7));
console.log(divide(4.2, 7.5));
console.log(divide(-4, 7));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
if (x === y){
  return true;
} else {
  return false;
}

  /* Se puede resolver en una sola línea con:
  return x === y;*/

}
console.log(sonIguales(4, 7));
console.log(sonIguales(4.2, 4.2));
console.log(sonIguales(-4, -4.0000));
console.log(sonIguales(1, true));

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return String(str1).length == String(str2).length

}
console.log(tienenMismaLongitud("12345", "rocas"));
console.log(tienenMismaLongitud(12345, "rocas"));
console.log(tienenMismaLongitud("roca", "rocas"));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return Number(num) < 90;

}
console.log(menosQueNoventa(49));
console.log(menosQueNoventa(89.9999));
console.log(menosQueNoventa(-92));
console.log(menosQueNoventa(90));
console.log(menosQueNoventa("9"));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return Number(num) > 50;
}
console.log(mayorQueCincuenta(49));
console.log(mayorQueCincuenta(49.9999));
console.log(mayorQueCincuenta(-92));
console.log(mayorQueCincuenta(90));
console.log(mayorQueCincuenta("90"));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
console.log(obtenerResto(45, 8));
console.log(obtenerResto(4.2, 4.2));
console.log(obtenerResto(-4, -4.0000));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 === 0;

}
console.log(esPar(45));
console.log(esPar(4.2));
console.log(esPar(-4));
console.log(esPar(0));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 !== 0;

}
console.log(esImpar(45));
console.log(esImpar(4.2));
console.log(esImpar(-4));
console.log(esImpar(0));

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
  // Opcional: return num * num

}
console.log(elevarAlCuadrado(3));
console.log(elevarAlCuadrado(4.2));
console.log(elevarAlCuadrado(-4));
console.log(elevarAlCuadrado(0))

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3);
  // Opcional: num ** 3;

}
console.log(elevarAlCubo(3));
console.log(elevarAlCubo(4.2));
console.log(elevarAlCubo(-4));
console.log(elevarAlCubo(0));
console.log(elevarAlCubo(2)**3);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent)

}
console.log(elevar(45, 8));
console.log(elevar(9, 1.5));
console.log(elevar(0.25, -3));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}

console.log(redondearNumero(3.49999999));
console.log(redondearNumero(4.2));
console.log(redondearNumero(-4.7));
console.log(redondearNumero(0))


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}
console.log(redondearHaciaArriba(3.49999999));
console.log(redondearHaciaArriba(4.2));
console.log(redondearHaciaArriba(-4.7));
console.log(redondearHaciaArriba(0))

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()
}
console.log(numeroRandom());
console.log(numeroRandom());

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0) { return false }
  else if (numero > 0) { return "Es positivo" }
  else { return "Es negativo" }
}
console.log(esPositivo(2))
console.log(esPositivo(3.49999999));
console.log(esPositivo(4.2));
console.log(esPositivo(-4.7));
console.log(esPositivo(0));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!"

}
console.log(agregarSimboloExclamacion("Hola"));
console.log(agregarSimboloExclamacion(0.44))

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return nombre + " " + apellido
}
console.log(combinarNombres("Gabi", "Pescio"));
console.log(combinarNombres("Comisión", 23308));
console.log(combinarNombres("Aquí va mi nombre", true));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola, " + agregarSimboloExclamacion(nombre);

}
console.log(obtenerSaludo(nuevaString));
console.log(obtenerSaludo("Piñón Fijo"));
console.log(obtenerSaludo(combinarNombres("Bruce", "Wayne")));

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return multiplica (Math.max(alto, 0), Math.max(ancho, 0));

}
console.log(obtenerAreaRectangulo(3, 4));
console.log(obtenerAreaRectangulo(-3, 4));
console.log(obtenerAreaRectangulo(elevarAlCubo(3), nuevoNum));

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return Math.max(lado, 0) * 4;
}
console.log(retornarPerimetro(2))
console.log(retornarPerimetro(3.49999999));
console.log(retornarPerimetro(4.2));
console.log(retornarPerimetro(-4.7));
console.log(retornarPerimetro(0));

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return obtenerAreaRectangulo(Math.max(base, 0), Math.max(altura, 0) ) / 2;

}
console.log(areaDelTriangulo(3, 4));
console.log(areaDelTriangulo(-3, 4));
console.log(areaDelTriangulo(3, -4));
console.log(areaDelTriangulo(3.4, 4.4));

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2
}

/*let cantidadEuros = prompt("- CONVERSOR DE EUROS A DÓLARES -\nIngresa la cantidad euros a cambiar:");*/
/*alert(`Tus €${cantidadEuros} equivalen a U$S${deEuroAdolar(cantidadEuros)}.`);*/
console.log(deEuroAdolar(23))


function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

  let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  if (letra.length > 1) {
    return "Dato incorrecto.";
  }

  for (let i = 0; i < vocales.length; i++) {
    if (letra.toLowerCase() === vocales[i]) {
      return "Es vocal.";
    }
  }

  return "El caracter ingresado no es una vocal."
}


console.log(esVocal("a"));
console.log(esVocal("Á"));
console.log(esVocal(nuevaString));
console.log(esVocal("4"));
console.log(esVocal("t"));
