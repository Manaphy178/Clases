// Podemos añadir contenido con innerHTML (no se recomienda)

// const board = document.querySelector(".board");
// board.innerHTML = "<div> <p> Item 1 </p> </div>";
/*
 * Si tenemos esto descomentado no sale el span de nuestro HTML
 */

// innerHTML para ver contenido
const span = document.querySelector("#mainSpan");
console.log(span.innerHTML);

// con innerText solo vemos el contenido pero respeta el css
console.log(span.innerText);

// Con textContent si se ve todo el contenido sin respetar css
console.log(span.textContent);
span.textContent = "AAAAAAAAAAAAAAAAAAA";
