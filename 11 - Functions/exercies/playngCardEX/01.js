// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getValue() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const randomIndex = Math.floor(Math.random() * values.length)
    const randomValue = values[randomIndex]
    console.log(randomValue)

}
function getSuits() {
    const suits = ['clubs', 'spades', 'hearts', 'diamonds']
    const randomIndex = Math.floor(Math.random() * suits.length)
    const randomSuit = suits[randomIndex]
    console.log(randomSuit)

}
function getCard() {
    const myCard = {
        value: getValue(),
        suit: getSuits()
    }
}
getCard()