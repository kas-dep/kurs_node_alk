const input = document.querySelector("#name");
const nameInDiv = document.querySelector("#nameInDiv");
const button = document.querySelector("button");

function showName(e) {
  e.preventDefault();
  nameInDiv.textContent = input.value;
}
button.addEventListener("click", showName);
