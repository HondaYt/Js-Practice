let time = prompt();
if (time > 24 || time < 0) {
  console.log("そんな時間はありません");
} else if (time <= 6) {
  console.log("おやすみなさい");
} else if (time <= 11) {
  console.log("おはようございます");
} else if (time == 12) {
  console.log("お昼ごはん");
} else if (time <= 17) {
  console.log("こんにちは");
} else {
  console.log("こんばんは");
}