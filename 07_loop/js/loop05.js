const fruit = [
  { name: "apple", price: 180 },
  { name: "banana", price: 230 },
  { name: "lemon", price: 200 },
  { name: "peach", price: 480 },
  { name: "kiwi", price: 80 },
  { name: "mango", price: 680 },
];

const fruPr = fruit.map((e) => {
  return e.price;
});
console.log(fruPr);

const out = document.getElementById("out");

const result = fruPr.reduce((prev, current) => prev + current);
console.log(result);
out.innerText = `${result}円`;
