//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/


var botao = document.querySelector("button");
var ct=0;
botao.onclick = function () {
  var nome = prompt("Qual é o comando para iniciar o git?");
  if ((nome == "git init")) {
    alert("O " + nome + ". Parabéns você acertou!");
    window.location="aula2.html";
  }
  else {
    ct ++;
    if ((ct==3)){
      window.location="aula1.html";
    }
      else {
      alert(" Você errou! tem mais "+(3-ct)+" chances");
      }
  }

}
