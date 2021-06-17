// Calculo do IMC
function imc (peso, altura){
    return (peso/(altura*altura)).toFixed(2)

}
console.log('IMC = '+imc(83.5,1.7))