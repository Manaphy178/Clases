// Comprueba que atributos tiene h1
const h1 = document.querySelector("h1");
console.log(h1.hasAttribute("id")); // devuelve true, funciona si poner una exclamacion
console.log(h1.hasAttribute("type")); // Dara falso porque no tiene atributo type

// para conseguir el valor del atributo
console.log(h1.getAttribute("id"));

// podria cambiar los valores de los atributos
h1.setAttribute("id", "Nuevo valor desde el JS");
console.log(h1.getAttribute("id"));

document.title = "En terminos de reproduccion Vaporeon es el mas compatible";
