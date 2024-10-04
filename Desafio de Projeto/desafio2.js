//2️⃣ Calculadora de partidas Rankeadas

function calcRanked(Win, Defeat){
    let balancedRanked = Win - Defeat

    let result
    if (Win <= 10){
        result = console.log("O Herói tem de saldo de " + balancedRanked + " está no nível de Ferro")
    }
    else if(Win >= 11 && Win <= 20){
       result=  console.log("O Herói tem de saldo de " + balancedRanked + " está no nível de Bronze")
    }
    else if(Win >= 21 && Win <= 50){
        result = console.log("O Herói tem de saldo de " + balancedRanked + " está no nível de Prata")
    }
    else if(Win >= 51 && Win <= 80){
       result =  console.log("O Herói tem de saldo de " + balancedRanked + " está no nível de Ouro")
    }
    else if(Win >= 91 && Win <= 100){
        result = console.log("O Herói tem de saldo de " + balancedRanked + " está no nível de Lendário")
    }
    else{
        result = console.log("O Herói tem de saldo de " + balancedRanked + " está no nível de Mortal")
    }

    return result
}

let resultado = calcRanked(50, 8);

console.log(resultado)
