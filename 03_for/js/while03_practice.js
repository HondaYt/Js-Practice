//残金
let wallet = 12800;
//価格
let price = 980;

// let i = 1;
// while (wallet > 750) {
//   while (i < 5) {
//     wallet -= price;
//     console.log(`${i}回目の買い物成功。残金は${wallet}円(単価${price}円)`);
//     i++;
//   }
//   price = 750;
//   wallet -= price;
//   console.log(`${i}回目の買い物成功。残金は${wallet}円(単価${price}円)`);
//   i++;
// }
// console.log(`買い物終了${i-1}個買えた`);

// for (let i = 1; i <= 20; i++) {
//   if (wallet > 750) {
//     if(i === 5){
//       console.log("割引");
//       price = 750;
//     }
//     wallet -= price;
//     console.log(`${i}回目の買い物成功。残金は${wallet}円(単価${price}円)`);
//   }
//   else{
//     console.log(`買い物終了${i-1}個買えた`);
//     break;
//   }
// }

let i = 0;
while (wallet > 750) {
  if (i === 5) {
    price = 750;
  }
  i++;
  wallet -= price;
  console.log(`${i}回目の買い物成功。残金は${wallet}円(単価${price}円)`);
}
console.log(`買い物終了${i}個買えた`);
