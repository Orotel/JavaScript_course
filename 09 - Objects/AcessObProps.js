/*
Syntax to acess values out of an object
numbers.[numberKey]
numbers['stringNumberKey']

*/

const numbers = { 
    100:'one hundred',
    16:'sisteen',
    '76 trombones':'great song'  
}
console.log(numbers[100] )
console.log(numbers['76 trombones'] )

// How can i acess this props?
const pallet = {
    red:'#eb4d4b',
    blue:'#30336b',
    yellow:'#30336b',
    100 :'onehundred'
}
// We have 3 different ways to acess props

console.log(pallet.red)          
console.log(pallet['blue'])         
let color = 'yellow'
pallet[color]

//if my user need one determinate color
let myUserColorFavorite = 'blue'

console.log(pallet['blu'+'e'])
console.log(pallet[myUserColorFavorite])
console.log(pallet.blue)





