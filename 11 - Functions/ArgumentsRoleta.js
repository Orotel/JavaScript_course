// é a mesma roleta porém com argumentos .
function rollDie(){
    let random = Math.floor(Math.random()*6)+1;
    console.log(`rolled: ${random}`)
}
function throwDice(numRolls){
    if (numRolls ==0){
        numRolls = 7
    }
    while(numRolls >0 ){
        rollDie()
        numRolls--
    }
}
throwDice(0)