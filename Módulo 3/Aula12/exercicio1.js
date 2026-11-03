const botao = document.getElementById("botao")

function verificarNota(nota){

    
    if (nota >= 5){
        return "aprovado"
    } else {
       return "reprovado"
    }

}

botao.addEventListener("click", function(){

    const nota = parseInt(document.getElementById("nota").value)

    let resultado = document.getElementById("resultado")

    let situacao = verificarNota(nota)

    resultado.textContent = situacao
    
})












