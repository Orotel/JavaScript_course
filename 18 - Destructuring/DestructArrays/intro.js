// apartir de um array, conseguimos criar variaveis para cada index.
const raceResults = ['felipe massa','ayrton senna','braia oconel','toreto']
// nas antigas tinhamos que fazer gold = raceResults[0]....
// para cada variavel, porém agora apresentamos um modo novo.
const [gold,silver,bronze,participation] = raceResults

console.log(gold)
console.log(silver)
console.log(bronze)


// =======================REST=====================================

// E se precisarmos apenas separar o primeiro dos outros
const [fatest, ,...everyOneElse] = raceResults
console.log(fatest)
console.log(everyOneElse )