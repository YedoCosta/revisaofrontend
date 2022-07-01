//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/
alert(" Questão 2 - sessionStorage.count: "+sessionStorage.count)
var button = document.querySelector("button");
button.onclick = function () {
  var nome = prompt("Qual é o comando para listar o estatus do git bash?");
  if ((nome == "git status")) {
    alert("O " + nome + ", serve para listar o status git.Parabéns você acertou!");
    window.location="aula3.html";
  }
  else {

        //====================================
        if (typeof (Storage) !== "undefined") {
          if (sessionStorage.count) {
            sessionStorage.count = Number(sessionStorage.count) + 1;
          } else {
            sessionStorage.count = 1;
          }
        } else {
          for(var i = 1;i <10000000;i++);
        }
        //====================================

    if ((sessionStorage.count==3)){
      window.location="aula1.html";
    }
      else {
      alert(" Você errou! tem mais "+(3-sessionStorage.count)+" chances");
      }

  }


}