// we use while, when we dont know exaclity nums we need
// for example, we have a game and the game only ends when players loss
// while (!GameOver,stillAlive,livesLeft >0) 
const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)
let count = 0
console.log(`a minha target é ${target} `)
while(guess != target){
    count ++
    guess = Math.floor(Math.random() * 10)
    console.log(`o meu guess atual é ${guess}`)
}
console.log(`o computador precisou de ${count} tentativas `)
