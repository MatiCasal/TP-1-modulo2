// TRABAJO NUMERO 1 JS

// ejercio 1

function paridad(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par ");
  } else {
    console.log(numero + " es un número impar ");
  }
}
paridad(8);
paridad(3);

// ejercicio 2

function comparacion(a, b) {
  if (a > b) {
    console.log(a + " es mayor que " + b);
  } else if (b > a) {
    console.log(b + " es mayor que " + a);
  } else {
    console.log("Los dos números son iguales.");
  }
}

comparacion(5, 9);
comparacion(6, 6);
comparacion(15, 11);

// ejercicio 3

function multiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de cinco.");
  } else {
    console.log(numero + " no es múltiplo de cinco.");
  }
}

multiploDeCinco(15);
multiploDeCinco(21);
multiploDeCinco(35);
multiploDeCinco(17);

// ejercicio 4

function imprimir(number) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}

imprimir(9);

// ejercicio 5... Preguntar si esta bien?

function palabraNumero(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

palabraNumero("Buenas tardes", 5);

// ejercicio 6

function valores(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const miArray = [15, "Hola, como estas?", false, 2023];
valores(miArray);

// ejercicio 7

function valoresArray(arrayNumeros) {
  for (let i = 0; i < arrayNumeros.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(arrayNumeros[i]);
  }
}

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valoresArray(numeros);

// ejercicio 8

function multiplicar(arrayNumeros, numero) {
  for (let i = 0; i < arrayNumeros.length; i++) {
    const resultado = arrayNumeros[i] * numero;
    console.log(resultado);
  }
}

const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numero = 4;
multiplicar(arrNumeros, numero);
