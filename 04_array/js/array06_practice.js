// 参加予定メンバーを登録順で配列で管理したいが
// 期待した通り動かないので、間違いを直す

let members =["中田","滝山","武内","桃山","板倉"];

// 出力：「参加メンバーは全部で5人」
console.log(`参加メンバーは全部で${members.length}人`);

// 宮本が参加
members.push("宮本");
// 出力："中田","滝山","武内","桃山","板倉","宮本"
console.log(members);

// 中田の都合が悪くなりキャンセル
// 中田の友達が参加したいとのことで中田の名前を「恵比寿」に変更
members[0] = "恵比寿";

// 出力："恵比寿",滝山","武内","桃山","板倉","宮本"
console.log(members);

// 出力：「参加メンバーは全部で6人」
console.log(`参加メンバーは全部で${members.length}人`);

