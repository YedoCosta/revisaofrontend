//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/
var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando que pega tudo da área de teste e faz um instantâneo permanente do estado atual do seu repositório no git bash?");
  if ((nome == "git commit -m")) {
    alert("O " + nome + ".Parabéns você acertou!");

  }
  else {
    alert("Voce errou!!! A resposta correta é: git commit -m");

  }

  window.location="aula7.html";
}