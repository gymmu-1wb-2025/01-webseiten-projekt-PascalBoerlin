console.log("Hello World!!!");
let counter = 0;

function createNewElement() {
  let newElement = document.createElement("p");

  newElement.textContent = "Element " + counter;

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}

let titleElement = document.querySelector("#Start");

let originalTitle = titleElement.textContent;

let count = 0;

function increaseCount() {
  count = count + 1;

  titleElement.textContent = originalTitle + " (" + count + ")";
}

document.addEventListener("keydown", increaseCount);

titleElement.addEventListener("click", increaseCount);

setInterval(increaseCount, 1000);
