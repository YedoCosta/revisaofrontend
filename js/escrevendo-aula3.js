//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/
var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para ver a versão do git bash?");
  if ((nome == "git --version")) {
    alert("O " + nome + ", serve para mostrar a versão git.Parabéns você acertou!");

  }
  else {
    alert("Voce errou!!! A resposta correta é: git --version");

  }

  window.location="aula4.html";
}