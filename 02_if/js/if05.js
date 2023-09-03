let photoshop = prompt("Photoshopの点数は?");
let illustrator = prompt("Illustratorの点数は?");
photoshop = Number(photoshop);
illustrator = Number(illustrator);
console.log(
    `Photoshopは${photoshop}点ね、Illustratorは${illustrator}点ね、平均${
        (photoshop + illustrator) / 2
    }点`
);
if ((photoshop + illustrator) / 2 < 0 || (photoshop + illustrator) / 2 > 100) {
    console.log("嘘つくんじゃない");
} else if ((photoshop + illustrator) / 2 <= 30) {
    console.log("がんばりなさい");
} else if ((photoshop + illustrator) / 2 <= 60) {
    console.log("まずまずね");
} else {
    console.log("頑張ったね");
}
