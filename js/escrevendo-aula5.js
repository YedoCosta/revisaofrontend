//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/
var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando que pega um arquivo modificado em seu diretório de trabalho e coloca a versão modificada em uma área de teste no git bash?");
  if ((nome == "git add")) {
    alert("O " + nome + ".Parabéns você acertou!");

  }
  else {
    alert("Voce errou!!! A resposta correta é: git add");

  }

  window.location="aula6.html";
}