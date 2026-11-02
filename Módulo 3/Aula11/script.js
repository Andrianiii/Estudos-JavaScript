const botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");

botao.addEventListener("click", function(){
const numero = parseInt(document.getElementById("campo").value);

    if (numero >= 18){
     resultado.textContent = "maior de idade";
   } else{
     resultado.textContent = "menor de idade";
   }
    
});