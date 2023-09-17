let func = () =>{
  console.log(func);
};

func();




function cal(numA,numB){
  // let numA = 20;
  // let numB = 10;
  return numA + numB;
}

function tax(price){
  const total = price * 1.1;
  console.log(total);
}

const price = cal(400,100);
console.log(price);

tax(price);