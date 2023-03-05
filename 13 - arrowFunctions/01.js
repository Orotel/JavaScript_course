const nums = [1,2,3,4,5,6,7,8,9]
// metodo antigo
const doubles1 = nums.map(function(number){
    return number*2
})
// metodo novo
const doubles2 = nums.map(numbers => numbers*2)

// console.log(doubles1)
// console.log(doubles2)

const partyList = nums.map(function(n){
    if(n % 2 == 0) return 'even';
    return 'odd'
})
const partyList2 = nums.map(n => n % 2 ===0?'even':'odd' )

console.log(partyList2)