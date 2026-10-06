function fatorial(valor){// nao se coloca var,let ou const

   var fact =1
    for(var i=1;i<=valor;i++){
        fact*=i;
    }
    return fact 
}
//quando o valor passado nao e number o js tenta connverter mas ve q nao e possivel entao o rwesultado e NAN(not a number) e quando vai fazer a comparacao com numero da false e o for nao executa
var resultado=fatorial(4) //quando noa passei nd a minha funcao ela mostrou 1
console.log(resultado)