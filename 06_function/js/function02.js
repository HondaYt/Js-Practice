let view = document.querySelector(".view");

function helloJP(msg){
  view.children[0].innerHTML = (`${msg}`);
}
helloJP("こんにちは");
