function somaNumero(numero1, numero2){
    console.log(numero1 + numero2)
}
somaNumero(1, 2)

function numeroMaiorOuIgual(numero3, numero4){
    console.log(numero3 >= numero4)
}
numeroMaiorOuIgual(3, 4)

function verificarParidade(numero5){
    const ehPar = numero5 % 2===0
    const frase = `o ${numero5} eh par? ${ehPar}`
    console.log(frase)    
}
verificarParidade(5)

function calculaSalarioLiquidio(salario){
    const desconto = salario *0.1
    const salarioLiquido = salario - desconto

return salarioLiquido
}

console.log(calculaSalarioLiquidio (1500.00))
console.log(calculaSalarioLiquidio (7000.00))
