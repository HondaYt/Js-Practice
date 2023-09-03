let wallet = 3000;
let item = prompt();
item = Number(item);
if (wallet > item) {
  console.log("購入することができます。");
} else if (item == wallet) {
  console.log("ピッタリです");
} else {
  console.log("購入することができません");
}
