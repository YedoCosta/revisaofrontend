//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/
var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para criar um clone do repositório remoto?");
  if ((nome == "git clone")) {
    alert("O " + nome + ".Parabéns você acertou!");

  }
  else {
    alert("Voce errou!!! A resposta correta é: git clone");

  }

  window.location="aula7.html";
}