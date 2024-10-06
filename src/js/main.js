import data from "./data.json";

const cardRow = document.querySelector("#cards-row");
const inputEl = document.querySelector("input");

// to create html paragraph

console.log(cardRow);
// target:to log all the data

for (let obj of data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = obj.name;
  cardRow.appendChild(paragraph);
}

// log the targetted element
// inputEl.focus();

document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    event.preventDefault(); //for not entering /
    inputEl.focus(); //for focus on search bar
  }
});
