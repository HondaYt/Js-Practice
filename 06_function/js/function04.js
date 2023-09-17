let num = document.querySelector("#num");
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let result = document.querySelector("#result");

function setpx(val) {
  return `${val}px`;
}

btn.onclick = () => {
  input.innerHTML = num.value;
  result.innerHTML = setpx(num.value);
};
