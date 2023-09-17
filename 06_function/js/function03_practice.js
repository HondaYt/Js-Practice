const msg = document.getElementById("text");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

function message(val) {
  // console.log(out.innerHTML);
  // console.log(msg.value);
  out.innerHTML = val;
}

btn.onclick = () => {
  message(msg.value);
};
