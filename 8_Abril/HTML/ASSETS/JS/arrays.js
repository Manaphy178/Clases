var cars = ["seat", "bmw", "ferrari"];

console.log(cars);

// Primera posicion
console.log(cars[0]);

// Longitud del array
console.log(cars.length);

// acceder a la ultima posicion del array
console.log(cars[cars.length - 1]);

// bucle for clasico para recorrer
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Funcion propia del array con foreach
// Forecha coge directamente el valor del array, el numero de la posicion y el array en si
cars.forEach(function (elemento, index, array) {
  // Con hacer consoleLog con elemento lo hace directamente
  // console.log(array[index]);
  console.log(
    "Mostrando marca: " + elemento + ". En posicion del array: " + index
  );
});

// funcion flecha para each
cars.forEach((marca, indice) => {
  return console.log(
    "Mostrando marca: " + marca + ". En posicion del array: " + indice
  );
});

console.clear();

// añadir elementos al array
var colores = ["amarillo", "rojo", "azul"];
colores[3] = "verde";
console.log(colores);

colores[colores.length - 1] = "morado";
console.log(colores);

// Para añadir elementos al array usamos push
// Push añade un elemento en la ultima posicion del array
colores.push("rojinegro");
console.log(colores);

// Eliminar elementos con splice
// Hay que ponerle el indice del elemento a eleminar y luego cuantos quieres eleminar
colores.splice(0, 1); //Esto eleminaria solamente el primero
console.log(colores);

// Para eleminar el ultimo
colores.splice(-1, 1);
console.log(colores);

// Sustituir un elemento
colores.splice(-1, 1, "verde");
console.log(colores);
