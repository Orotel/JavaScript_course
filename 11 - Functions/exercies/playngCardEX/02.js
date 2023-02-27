function pick(arr) {
    randomIndex = Math.floor(Math.random()*arr.length)
    randomElementArr = arr[randomIndex]
    return randomElementArr
}

function getCard() {
    const myCard = {
        value: pick(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']),
        suit: pick(['clubs', 'spades', 'hearts', 'diamonds'])
        
    }
    return myCard
}

console.log(getCard())