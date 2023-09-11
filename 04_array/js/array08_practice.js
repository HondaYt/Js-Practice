// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random() * 5);
const omikuji = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];

switch (no) {
  case 0:
    console.log("大吉ですおめでとう！");
    break;
  case 1:
    console.log("中吉ですラッキー！");
    break;
  case 2:
    console.log("小吉です");
    break;
  case 3:
    console.log("コメントに困る吉です");
    break;
  case 4:
    console.log("凶ですアンラッキー");
    break;
  case 5:
    console.log("大凶です残念・・・");

  default:
    console.log("無効な数値です。");
}

console.log(omikuji[no]);
