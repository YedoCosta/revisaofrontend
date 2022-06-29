//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/
var button = document.querySelector("button");

button.onclick = function () {
  var nome1 = prompt("Qual é o comando para listar o estatus do git bash?");
  if ((nome == "git status")) {
    alert("O " + nome1 + ", serve para listar o status git.Parabéns você acertou!");

  }
  else {
    alert("O " + nome1 + ", serve para listar o status git. Você errou!");

  }

  window.location="aula3.html";
}