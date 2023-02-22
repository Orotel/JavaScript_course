const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)
counter = 0 
while(true){
    if (target == guess) break;
    console.log(`target: ${target} guess: ${guess}`)
    guess = Math.floor(Math.random() * 10)
    counter++
}
console.log(`target: ${target} guess: ${guess}`)

console.log(`a maquina errou o total de ${counter} vezes`)