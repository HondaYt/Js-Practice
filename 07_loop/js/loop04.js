const fruit = [
  { name: "apple", price: 180 },
  { name: "banana", price: 230 },
  { name: "lemon", price: 200 },
  { name: "peach", price: 480 },
  { name: "kiwi", price: 80 },
  { name: "mango", price: 680 },
];

const inputName = document.getElementById("name");
const out = document.getElementById("out");
const btn = document.getElementById("btn");
let result;
btn.onclick = () => {
  result = fruit.find(({ name }) => name === inputName.value);
  // console.log(inputName.value);
  out.innerText = `${result.name}：価格は${result.price}円です`;
};

// console.log(result.name);

// console.log(result);
