// // Primera forma decambiar estilos, NO ES la mejor forma
// const heading = document.querySelector("h1");
// //console.log(heading.textContent)

// heading.style.color="#ae55ff";
// heading.style.backgroundColor = "#d0d0d0"

// // Segunda forma, con element.cssText, TAMPOCO es la mejor forma
heading.style.cssText = "background-color:#34deaa; padding:2rem;";

// FORMA MAS UTILIZADA
const heading = document.querySelector("h1");

// Para ver que clases tiene asignadas --> classNane
console.log(heading.className);

// Cambiar clase sobreescribiendo todas las clases, peeeeeeeero elimina clases que ya tenga
heading.className = "ruby";

console.log(heading.className);

// Añadir clases al resto de clases que tenga
heading.classList.add("bigger");
console.log(heading.className);

// Forma mas utilizada toogle, añade clase en caso de que no la tenga o la quita si la tiene
heading.classList.toggle("bigger"); //quita bigger
console.log(heading.className);
heading.classList.toggle("ruby"); //quita ruby

heading.classList.toggle("bigger"); //pone ruby
