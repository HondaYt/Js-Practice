// const btnA = document.getElementById("btnA");
// const btnB = document.getElementById("btnB");
// const btnC = document.getElementById("btnC");
const btn = document.getElementsByClassName("btn");
const result = document.getElementById("result");

// btnA.onclick = () => {
//   result.innerText = "btnAが押された";
// }

// btnB.onclick = () => {
//   result.innerText = "btnBが押された";
// }

// btnC.onclick = () => {
//   result.innerText = "btnCが押された";
// }

// function clickBtn(evt) {
//   // console.log(evt);
//   return evt;
// }

// let btnArr = clickBtn(btn);

// btnArr.onclick = () => {
//   result.innerText = "btnArrが押された";
// };

// console.log(btnArr);

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = (evt) => {
    result.innerText = evt.target.innerHTML + "が押された";
    // console.log(evt.target.innerHTML);
  }
};