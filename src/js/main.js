// to target the input element
const inputEl = document.querySelector("input");
// log the targetted element
// inputEl.focus();

document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    event.preventDefault(); //for not entering /
    inputEl.focus(); //for focus on search bar
  }
});
