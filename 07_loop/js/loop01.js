const menu = [
  "唐揚げ定食",
  "焼き魚定食",
  "酢豚定食",
  "ステーキ定食",
  "カツカレー定食",
];

const menuUl = document.querySelector("#menu");

menu.forEach((e,i) => {
  console.log(e,i);
  menuUl.innerHTML += `<li>${e}</li>`
});