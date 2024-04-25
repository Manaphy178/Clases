console.clear();

// Funcion saludar
function saludar() {
  return "Hola que tal";
}
console.log(saludar());

// Funcion doble con un parametro

function doble(numero) {
  return numero * 2;
}
console.log("Funcion doble",doble(4));

// Function doble con  arrow

dobleArrow = (numero) => numero * 2;

console.log("Funcion doble con flecha", dobleArrow(5));

// Funcion resta con 2 parametros

function resta(num1, num2) {
  return num1 - num2;
}

console.log("Funcion resta",resta(6, 4));

// Function resta con flecha

restaArrow = (num1, num2) => num1 - num2;

console.log("Funcion resta", restaArrow(6, 4));

// funcion para filtrar un array
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = arr1.filter(function (numero) {
  return numero % 2 == 0;
});
console.log("Funcion Array: ", pares);

// Funcion paresArrow con flecha

paresArrow = arr1.filter((numero) => numero % 2 != 0);
console.log("Funcion ArrayArrow: ", paresArrow);
