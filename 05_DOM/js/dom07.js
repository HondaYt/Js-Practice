const item_name = document.querySelector("#item_name");
const size = document.querySelector("#size");
const btn = document.querySelector("#btn");
const orderlist = document.querySelector("#orderlist");

btn.onclick = () => {
  orderlist.innerHTML += `<li>${size.value}サイズ：${item_name.value}</li>`
}