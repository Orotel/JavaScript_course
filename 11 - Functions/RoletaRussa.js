function rollDie(){
    let random = Math.floor(Math.random()*6)+1;
    console.log(`rolled: ${random}`)
}
function throwDice(){
    let count=0
    while(count <6){
        rollDie()
        count++
    }
}
throwDice()