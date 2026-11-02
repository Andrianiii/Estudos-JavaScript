// Vamos escrever nosso JavaScript juntos nesta aula.

var titulo = document.getElementById("titulo"); 
// "titulo" corresponde ao id="titulo" que está no HTML

titulo.textContent = "Aprendendo JavaScript";
// textContent = "permite ler ou alterar o texto"

var mensagem = document.getElementById("mensagem")

mensagem.textContent = "Estou aprendendo a manipular o DOM!";

//---------------------------------------------------------------------

var botao = document.getElementById("botao");

//botao.addEventListener("click", function(){
    // Código será executado no clique
   
       //  alert("Você clicou no botão!");
// })

//botao.addEventListener("click", function(){
  //  titulo.textContent = "Você clicou no botão";
// })

botao.addEventListener("click", function(){
    titulo.textContent = "Você clicou no butão!";
    mensagem.textContent = "Mó gay em";
})