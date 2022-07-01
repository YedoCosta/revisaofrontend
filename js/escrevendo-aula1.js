//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

//var count = sessionStorage.count;
var botao = document.querySelector("button");
sessionStorage.count = 0;
botao.onclick = function () {
  var nome = prompt("Qual é o comando para iniciar o git?");
  if ((nome == "git init")) {
    alert("O " + nome + ". Parabéns você acertou!");
    window.location = "aula2.html";
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
      for (var i = 1; i < 10000000; i++);
    }
    //====================================

    if ((Number(sessionStorage.count) == 3)) {
      window.location = "aula1.html";
    }
    else {
      // alert(" 6 sessionStorage.count: "+sessionStorage.count)
      alert(" Você errou! tem mais " + (3 - sessionStorage.count) + " chances");
    }
  }

}
