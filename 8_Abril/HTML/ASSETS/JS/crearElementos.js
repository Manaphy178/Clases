const board = document.querySelector(".board");

// // createElement para crear objetos en el DOM
const container = document.createElement("div");
const item1 = document.createElement("p");
const item2 = document.createElement("p");

item1.textContent = "Soy el primer Item";
item2.textContent = "Soy el segundo Item";

// // Con append añadimos nodos, sustituye appendChild
container.append(item1, item2);

board.append(container);

// const board = document.querySelector(".board");
// const container = document.createElement("div");
const items = ["Macarrones", "Arepas", "Migas"];

items.forEach((item) => {
  let pElement = document.createElement("p");
  pElement.textContent = item;
  container.append(pElement);
});

board.append(container);
