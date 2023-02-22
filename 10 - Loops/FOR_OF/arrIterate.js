const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
]
for(let row of magicSquare){
    let sum = 0
    for(let num of row){
        sum +=num
    }
    console.log(` na linha ${row} a soma é ${sum}`)
}

/*              exemplo no for
for(let i = 0; i < magicSquare.length; i++){
    let row = magicSquare[i]
    let sum = 0
    for(let j=0; j< magicSquare[i].length; j++){
        sum +=row[j]
    }
    console.log(`a soma da linha ${row} é igual a ${sum}`)
}
*/