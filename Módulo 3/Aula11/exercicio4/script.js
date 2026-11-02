const resultado = verificarIdade(16)

function verificarIdade(idade){
    if (idade >= 18){
        return "maior de idade"
    } else {
        return "menor de idade"
    }
}

console.log(resultado)