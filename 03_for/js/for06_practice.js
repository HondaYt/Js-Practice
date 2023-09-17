//残金
let wallet = 12800;
//価格
let price = 980;

for (let i = 1; i <= 20; i++) {
  if (wallet > 750) {
    if(i === 5){
      console.log("割引");
      price = 750;
      // wallet -= price;
      // console.log(`${i}回目の買い物成功。残金は${wallet}円(単価${price}円)`);
    }
    // else{
    // }
    wallet -= price;
    console.log(`${i}回目の買い物成功。残金は${wallet}円(単価${price}円)`);
  }
  else{
    console.log(`買い物終了${i-1}個買えた`);
    break;
  }
}
