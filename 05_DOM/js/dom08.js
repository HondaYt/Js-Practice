const btnL = document.querySelector("#btnL");
const btnS = document.querySelector("#btnS");
const text = document.querySelector("#text");

btnL.onclick = () => {
  text.style.fontSize = "80px"
}

btnS.onclick = () => {
  text.style.fontSize = "20px"
}