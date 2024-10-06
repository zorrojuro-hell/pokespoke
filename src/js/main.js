import data from "./data.json";

const cardRow = document.querySelector("#cards-row");
const inputEl = document.querySelector("input");

// to create html paragraph

console.log(cardRow);
// target:to log all the data

for (let pokemonObj of data) {
  const div = document.createElement("div");
  div.classList.add("col");

  div.innerHTML = `
    <div class="card">
        <img
        src="${pokemonObj.image}"
        class="card-img-top"
        alt="..."/>
        <div class="card-body">
            <h5 class="card-title">${pokemonObj.name}</h5>
            <p class="card-text">${pokemonObj.description}</p>
        </div>
    </div>`;

  cardRow.appendChild(div);
}

// log the targetted element
// inputEl.focus();

document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    event.preventDefault(); //for not entering /
    inputEl.focus(); //for focus on search bar
  }
});
