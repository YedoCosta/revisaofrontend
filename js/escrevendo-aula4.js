//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/
var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para enviar o conteúdo do repositório local para um repositório remoton o git bash?");
  if ((nome == "git push")) {
    alert("O " + nome + ". Parabéns você acertou!");

  }
  else {
    alert("Voce errou!!! A resposta correta é: git push");

  }

  window.location="aula5.html";
}