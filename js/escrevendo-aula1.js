//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para iniciar o git?");
  if ((nome == "git init")) {
    alert("Voce errou!!! A resposta correta é: git init");

  }
  else {
    alert("O " + nome + ", serve para iniciar o git. Você errou!");

  }
  window.location="aula2.html";
}
