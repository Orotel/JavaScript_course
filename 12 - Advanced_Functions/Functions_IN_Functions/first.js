// aqui aprendemos a colocar uma função dentro da outra

function callThreeTimes(qualquerNome){
    qualquerNome()
    qualquerNome()
    qualquerNome()
}
function cry(){
    console.log('lagrimas lagrimas e lagrimas')
}
function hapy(){
    console.log('estou feliz estou feliz')
}

// callThreeTimes(cry)
// callThreeTimes(hapy)

// aqui vamos fazer uma função que repete igual a CallThreTimes, porém ela ira repetir quantas vezes o usuario mandar.

function RepitaQuantasVezes(sentimento,nvezes){
    for(let i = 0; i < nvezes; i++){
        sentimento()
    }
}
// RepitaQuantasVezes(hapy,10)
 
function escolhaRandom (f1,f2){
    let random = Math.random()
    console.log(random)
    if( random < 0.5){
        f1()
    }
    else{
        f2()
    }
}
escolhaRandom(cry,hapy)