console.log("Hello World!!!");
let counter = 0;

function createNewElement() {
  let newElement = document.createElement("p");

  newElement.textContent = "Element " + counter;

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}
