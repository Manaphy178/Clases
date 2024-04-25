// if else
const animal = prompt("¿Que mascosta tienes?");

if (animal == "gato" || animal == "Gato") {
  console.log("Tienes un gato");
} else if (animal == "perro" || animal == "Perro") {
  console.log("Eres un hombre de bien");
} else {
  console.log("$animal ¿Que coño tienes por animal?");
}

// switch

switch (animal) {
  case "perro":
    console.log("what up dagh");
    break;
  case "gato":
    console.log("meow");
    break;
  default:
    console.log("Te comiste a tu mascota?");
    break;
}
