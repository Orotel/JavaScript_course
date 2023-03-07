const words = ['aabaf','fbi','juan','coap','bafl']

const abbrevs = words.map(function(single){
    return single.toUpperCase().split('').join('.')
})

console.log(abbrevs)