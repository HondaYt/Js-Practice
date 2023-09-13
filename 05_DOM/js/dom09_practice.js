const btnSmall = document.querySelector("#btn-small");
const btnLarge = document.querySelector("#btn-large");
const wrap = document.querySelector("#wrap");


btnSmall.onclick = () => {
  console.log(wrap.style.fontSize);
  
  if (parseFloat(wrap.style.fontSize) > 10) {
    wrap.style.fontSize = (`${parseFloat(wrap.style.fontSize) - 1}px`);
  }
  else{
    window.alert("これ以上は小さくできません。");
  }
}
btnLarge.onclick = () => {
    wrap.style.fontSize = `${parseFloat(wrap.style.fontSize) + 1}px`;
}

