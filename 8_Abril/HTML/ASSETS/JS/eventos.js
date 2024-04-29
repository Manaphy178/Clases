// Capturar eventos con addeventlistener
const boton = document.querySelector(".btn");

// Primera forma con funcion anonima
boton.addEventListener("click", function () {
  console.log("Marica");
});
boton.addEventListener("click", function () {
  console.log("jaja");
});

// Segunda forma con funcion flecha
boton.addEventListener("click", () => {
  console.log("Tonto");
});

// Tercera forma funcion declarada
function pringao(event) {
  // console.log("Menudo pringao");
  // console.log(event.target);
  // Muestra el evento que recibe la funcion.
  // Con .target me muestra el objeto que estas pulsando

  // Vamos a cambiar el texto del boton. Con target.textContent puedo cambiar el texto
  event.target.textContent="EPAAA donde tocas chavalin, prueba un poquito mas abajo"
  
}
boton.addEventListener("click", pringao);
