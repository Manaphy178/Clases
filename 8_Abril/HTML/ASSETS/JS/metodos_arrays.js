const personajes = [
  {
    id: 1,
    nombre: "Jaime",
    familia: "Lannister",
    edad: 34,
  },
  {
    id: 2,
    nombre: "Arya",
    familia: "Stark",
    edad: 11,
  },
  {
    id: 3,
    nombre: "Sansha",
    familia: "Stark",
    edad: 13,
  },
  {
    id: 4,
    nombre: "John",
    familia: "Snow",
    edad: 25,
  },
  {
    id: 5,
    nombre: "Cersei",
    familia: "Lannister",
    edad: 34,
  },
];

// foreach

personajes.forEach((pj) => console.log(pj.nombre));

// filter --> todos los elementos que cumplen la condicion se añaden a un nuevo array

const lanniters = personajes.filter((pj) => {
  return pj.familia == "Lannister";
});
console.clear();
console.log(lanniters);

// otro de ejemplo con un array de numeros
const numeros = [1, 2, 3, 4, 5, 2, 1, 3];
const mayor = numeros.filter((num) => num > 3);
console.log(mayor);
console.clear();

// find --> devuelve el primer valor que encuentra que cumple la funcion
const buscarArya = personajes.find((pj) => pj.nombre == "Arya");
console.log(buscarArya);

// map devuelve un nuevo array transformando los elementos que tengamos en el array
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doble = function (numero) {
//   return numero * 2;
// };
const doble = (numero) => numero * 2;

const numerosDobles = numeros2.map(doble);
console.log(numerosDobles);
