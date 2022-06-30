//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/
var button = document.querySelector("button");
var ct=0;
button.onclick = function () {
  var nome = prompt("Qual é o comando para listar o estatus do git bash?");
  if ((nome == "git status")) {
    alert("O " + nome + ", serve para listar o status git.Parabéns você acertou!");
    window.location="aula3.html";
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