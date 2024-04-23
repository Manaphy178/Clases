// Selector querySelectorAll, muy versatil y utilizable
const listItem = document.querySelectorAll(".listItem");
console.log(listItem);

// ejemplo para recorrerlo
listItem.forEach((item) => {
  console.log(item.textContent);
  // item.textContent = "MAMAHUEVO"
});

// QuerySelector, muy utilizado tambien, devuelve el primer elemento que coincida
const listItemFirst = document.querySelector(".first");
console.log(listItemFirst);
listItemFirst.textContent = "MAMAHUEVO";

// querySelector puede no ser necesario utilizarlo con document
const ul = document.querySelector("ul");
const primerElemento = ul.querySelector(".first");
console.log(primerElemento);

// getElementsbyTagName
const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

// getElementsByClassName
const clasesListItems = document.getElementsByClassName("listItem");
console.log(clasesListItems);
