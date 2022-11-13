let HighScore =5
let UserScore =7

if (UserScore > HighScore){
    HighScore = UserScore
    console.log(`Congrats,you have the new high score of ${HighScore}`)
}
else{
    console.log (`Good game. Your score of ${UserScore} 
    did not beat thee high score of ${HighScore} !`)
}