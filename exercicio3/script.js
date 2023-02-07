function soma(num1, num2){
    const somaDoisNumeros = num1 + num2
    const frase = `O resultado de ${num1} + ${num2} eh: ${somaDoisNumeros}`
    return frase
}

function subtrai(num1, num2){
    const subtraiDoisNumeros = num1 - num2
    const frase = `O resultado de ${num1} - ${num2} eh: ${subtraiDoisNumeros}`
    return frase
}

function multiplica(num1, num2){
    const multiplicaDoisNumeros = num1 * num2
    const frase = `O resultado de ${num1} * ${num2} eh ${multiplicaDoisNumeros}`
    return frase
}

function divide(num1, num2){
    const divideDoisNumero = num1 / num2
    const frase = `O resultado de ${num1} / ${num2} eh ${divideDoisNumero}`
    return frase
}

const numeroSolicitado1 = Number(prompt(`Informe o primeiro numero`))
const numeroSolicitado2 = Number(prompt(`Informe o segundo Numero`))

const opSoma = soma(numeroSolicitado1, numeroSolicitado2)
const opSubtrai = subtrai(numeroSolicitado1, numeroSolicitado2)
const opMultiplica = multiplica(numeroSolicitado1, numeroSolicitado2)
const opDivide = divide(numeroSolicitado1, numeroSolicitado2)

console.log(opSoma)
console.log(opSubtrai)
console.log(opMultiplica)
console.log(opDivide)