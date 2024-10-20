import {shuffle} from 'fast-shuffle'
import Fuse from "fuse.js"
import data from "./data.json";
import { PokemonCard } from "./components/PokemonCards";


const inputEl = document.querySelector("input");
const cardRow = document.querySelector("#cards-row");

// to create html paragraph

console.log(cardRow);
// target:to log all the data

function renderPokemon(list){
  cardRow.innerHTML = "";

  for (let pokemonObj of list) {
    const pokemon = PokemonCard(pokemonObj.image , pokemonObj.name , pokemonObj.description , pokemonObj.link);
    cardRow.appendChild(pokemon);
    
  }
}

function renderFilteredPokemon(term) {
  const fuse = new Fuse(data,{
    keys: ["name"],
  })
  
  const filterred = fuse.search(term).map((pokemonObj) => pokemonObj.items);

  // renderPokemon(filterred);
}

// log the targetted element
// inputEl.focus();

// input elements ob changes

inputEl.addEventListener("input", (event) => {
  const currValue = event.target.value.toLowerCase().trim();
  renderFilteredPokemon(currValue)
  }
  

);


document.addEventListener("keyup", function (event) {
  if (event.key === "/") {
    event.preventDefault(); //for not entering /
    inputEl.focus(); //for focus on search bar
  }
});

renderPokemon(shuffle(data));