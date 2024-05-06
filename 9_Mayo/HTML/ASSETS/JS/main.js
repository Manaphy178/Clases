const form = document.querySelector("#formularioCompleto");
// console.log(form);
form.addEventListener("submit", validar);
function validar(event) {
  //Editamos el envio del formulario
  event.preventDefault();

  /* A modo de ejemplo creo un array,
  pero SOLO para ver como capturamos elementos */
  let datosUser = [];

  /* Expresion regular
  La contraseña debe tener al menos entre 8 y 16 caracteres,
  al menos un digito y al menos una mayuscula y una minuscula */
  const EXPREGULARPASS = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

  let nombre = document.querySelector("#nombre").value;
  let pass = document.querySelector("#pass").value;
  // Esta es la forma de poder seleccionar una radio button que este marcado
  let genero = document.querySelector('input[name="genero"]:checked').value;

  // Para los smoll
  let errorNombre = document.querySelector("#errorNombre");
  let errorPass = document.querySelector("#errorPass");

  // Validamos que el nombre tenga entre 2 y 20 caracteres
  if (nombre.length > 2 && nombre.length < 20) {
    datosUser.push(nombre); // Esto es para ver como captura los elementos. Solo para no liarnos
    errorNombre.classList.add("no-error-text");
    errorNombre.classList.remove("error-text");
  } else {
    errorNombre.classList.remove("no-error-text");
    errorNombre.classList.add("error-text");
  }

  // Validamos el password
  // EXPREGULARPASS es una expresion que tienen sus propios metodos
  if (EXPREGULARPASS.test(pass)) {
    datosUser.push(pass); // A modo de ejemplo se mete en un array
    errorPass.classList.add("no-error-text");
    errorPass.classList.remove("error-text");
  } else {
    errorPass.classList.remove("no-error-text");
    errorPass.classList.add("error-text");
  }
  
  // Añadimos al array el genero
  datosUser.push(genero);
  // Vemos el array a modo de ejemplo
  console.log(datosUser);

  // envia el formulario cuando este todo correcto
  // form.submit();
  // Esto esta comentado para poder ver los cambios del formulario
}
