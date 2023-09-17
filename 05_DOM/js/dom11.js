let changeBtn = document.querySelectorAll(".changeBtn");
const bg = document.querySelector("#bg");

for (let i = 0; i < changeBtn.length; i++) {
  changeBtn[i].onclick = (evt) => {
    bg.style.backgroundColor = evt.target.innerHTML;
    // console.log(evt.target.innerHTML);
  }
};